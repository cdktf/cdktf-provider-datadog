# `dataDatadogIntegrationAwsAvailableLogsServices` Submodule <a name="`dataDatadogIntegrationAwsAvailableLogsServices` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsAvailableLogsServices <a name="DataDatadogIntegrationAwsAvailableLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

datadatadogintegrationawsavailablelogsservices.NewDataDatadogIntegrationAwsAvailableLogsServices(scope Construct, id *string, config DataDatadogIntegrationAwsAvailableLogsServicesConfig) DataDatadogIntegrationAwsAvailableLogsServices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

datadatadogintegrationawsavailablelogsservices.DataDatadogIntegrationAwsAvailableLogsServices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

datadatadogintegrationawsavailablelogsservices.DataDatadogIntegrationAwsAvailableLogsServices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

datadatadogintegrationawsavailablelogsservices.DataDatadogIntegrationAwsAvailableLogsServices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

datadatadogintegrationawsavailablelogsservices.DataDatadogIntegrationAwsAvailableLogsServices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableLogsServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogIntegrationAwsAvailableLogsServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/data-sources/integration_aws_available_logs_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableLogsServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices">AwsLogsServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AwsLogsServices`<sup>Required</sup> <a name="AwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices"></a>

```go
func AwsLogsServices() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsAvailableLogsServicesConfig <a name="DataDatadogIntegrationAwsAvailableLogsServicesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogintegrationawsavailablelogsservices"

&datadatadogintegrationawsavailablelogsservices.DataDatadogIntegrationAwsAvailableLogsServicesConfig {
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



