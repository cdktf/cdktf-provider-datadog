# `dataDatadogGcpUcConfig` Submodule <a name="`dataDatadogGcpUcConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogGcpUcConfig <a name="DataDatadogGcpUcConfig" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config datadog_gcp_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

datadatadoggcpucconfig.NewDataDatadogGcpUcConfig(scope Construct, id *string, config DataDatadogGcpUcConfigConfig) DataDatadogGcpUcConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig">DataDatadogGcpUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig">DataDatadogGcpUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogGcpUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

datadatadoggcpucconfig.DataDatadogGcpUcConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

datadatadoggcpucconfig.DataDatadogGcpUcConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

datadatadoggcpucconfig.DataDatadogGcpUcConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

datadatadoggcpucconfig.DataDatadogGcpUcConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogGcpUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogGcpUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogGcpUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogGcpUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.errorMessages">ErrorMessages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportPrefix">ExportPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportProjectName">ExportProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.months">Months</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.statusUpdatedAt">StatusUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountIdInput">CloudAccountIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountId">CloudAccountId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.errorMessages"></a>

```go
func ErrorMessages() *[]*string
```

- *Type:* *[]*string

---

##### `ExportPrefix`<sup>Required</sup> <a name="ExportPrefix" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportPrefix"></a>

```go
func ExportPrefix() *string
```

- *Type:* *string

---

##### `ExportProjectName`<sup>Required</sup> <a name="ExportProjectName" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportProjectName"></a>

```go
func ExportProjectName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.months"></a>

```go
func Months() *f64
```

- *Type:* *f64

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusUpdatedAt`<sup>Required</sup> <a name="StatusUpdatedAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.statusUpdatedAt"></a>

```go
func StatusUpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CloudAccountIdInput`<sup>Optional</sup> <a name="CloudAccountIdInput" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountIdInput"></a>

```go
func CloudAccountIdInput() *f64
```

- *Type:* *f64

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountId"></a>

```go
func CloudAccountId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogGcpUcConfigConfig <a name="DataDatadogGcpUcConfigConfig" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadoggcpucconfig"

&datadatadoggcpucconfig.DataDatadogGcpUcConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudAccountId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.cloudAccountId">CloudAccountId</a></code> | <code>*f64</code> | The Datadog cloud account ID for the GCP Usage Cost configuration you want to retrieve information about. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.cloudAccountId"></a>

```go
CloudAccountId *f64
```

- *Type:* *f64

The Datadog cloud account ID for the GCP Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config#cloud_account_id DataDatadogGcpUcConfig#cloud_account_id}

---



