# `dataDatadogSecurityMonitoringSuppressions` Submodule <a name="`dataDatadogSecurityMonitoringSuppressions` Submodule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringSuppressions <a name="DataDatadogSecurityMonitoringSuppressions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/security_monitoring_suppressions datadog_security_monitoring_suppressions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.NewDataDatadogSecurityMonitoringSuppressions(scope Construct, id *string, config DataDatadogSecurityMonitoringSuppressionsConfig) DataDatadogSecurityMonitoringSuppressions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig">DataDatadogSecurityMonitoringSuppressionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig">DataDatadogSecurityMonitoringSuppressionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSecurityMonitoringSuppressions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogSecurityMonitoringSuppressions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogSecurityMonitoringSuppressions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogSecurityMonitoringSuppressions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/data-sources/security_monitoring_suppressions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringSuppressions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressionIds">SuppressionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressions">Suppressions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList">DataDatadogSecurityMonitoringSuppressionsSuppressionsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SuppressionIds`<sup>Required</sup> <a name="SuppressionIds" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressionIds"></a>

```go
func SuppressionIds() *[]*string
```

- *Type:* *[]*string

---

##### `Suppressions`<sup>Required</sup> <a name="Suppressions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressions"></a>

```go
func Suppressions() DataDatadogSecurityMonitoringSuppressionsSuppressionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList">DataDatadogSecurityMonitoringSuppressionsSuppressionsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringSuppressionsConfig <a name="DataDatadogSecurityMonitoringSuppressionsConfig" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

&datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataDatadogSecurityMonitoringSuppressionsSuppressions <a name="DataDatadogSecurityMonitoringSuppressionsSuppressions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

&datadatadogsecuritymonitoringsuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringSuppressionsSuppressionsList <a name="DataDatadogSecurityMonitoringSuppressionsSuppressionsList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.NewDataDatadogSecurityMonitoringSuppressionsSuppressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogSecurityMonitoringSuppressionsSuppressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get"></a>

```go
func Get(index *f64) DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference <a name="DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogsecuritymonitoringsuppressions"

datadatadogsecuritymonitoringsuppressions.NewDataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.dataExclusionQuery">DataExclusionQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.ruleQuery">RuleQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.suppressionQuery">SuppressionQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions">DataDatadogSecurityMonitoringSuppressionsSuppressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataExclusionQuery`<sup>Required</sup> <a name="DataExclusionQuery" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.dataExclusionQuery"></a>

```go
func DataExclusionQuery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.ruleQuery"></a>

```go
func RuleQuery() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `SuppressionQuery`<sup>Required</sup> <a name="SuppressionQuery" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.suppressionQuery"></a>

```go
func SuppressionQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogSecurityMonitoringSuppressionsSuppressions
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions">DataDatadogSecurityMonitoringSuppressionsSuppressions</a>

---



