# `dataDatadogMonitorConfigPolicies` Submodule <a name="`dataDatadogMonitorConfigPolicies` Submodule" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitorConfigPolicies <a name="DataDatadogMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/data-sources/monitor_config_policies datadog_monitor_config_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.NewDataDatadogMonitorConfigPolicies(scope Construct, id *string, config DataDatadogMonitorConfigPoliciesConfig) DataDatadogMonitorConfigPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig">DataDatadogMonitorConfigPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig">DataDatadogMonitorConfigPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogMonitorConfigPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogMonitorConfigPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/data-sources/monitor_config_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitorConfigPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies">MonitorConfigPolicies</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `MonitorConfigPolicies`<sup>Required</sup> <a name="MonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies"></a>

```go
func MonitorConfigPolicies() DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorConfigPoliciesConfig <a name="DataDatadogMonitorConfigPoliciesConfig" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

&datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.41.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogMonitorConfigPoliciesMonitorConfigPolicies <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

&datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies {

}
```


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

&datadatadogmonitorconfigpolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.NewDataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get"></a>

```go
func Get(index *f64) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.NewDataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy"></a>

```go
func TagPolicy() DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogMonitorConfigPoliciesMonitorConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a>

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.NewDataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get"></a>

```go
func Get(index *f64) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogmonitorconfigpolicies"

datadatadogmonitorconfigpolicies.NewDataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired">TagKeyRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues">ValidTagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired"></a>

```go
func TagKeyRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues"></a>

```go
func ValidTagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a>

---



