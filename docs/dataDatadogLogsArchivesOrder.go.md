# `dataDatadogLogsArchivesOrder` Submodule <a name="`dataDatadogLogsArchivesOrder` Submodule" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogLogsArchivesOrder <a name="DataDatadogLogsArchivesOrder" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/logs_archives_order datadog_logs_archives_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

datadatadoglogsarchivesorder.NewDataDatadogLogsArchivesOrder(scope Construct, id *string, config DataDatadogLogsArchivesOrderConfig) DataDatadogLogsArchivesOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig">DataDatadogLogsArchivesOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig">DataDatadogLogsArchivesOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogLogsArchivesOrder resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

datadatadoglogsarchivesorder.DataDatadogLogsArchivesOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

datadatadoglogsarchivesorder.DataDatadogLogsArchivesOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

datadatadoglogsarchivesorder.DataDatadogLogsArchivesOrder_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

datadatadoglogsarchivesorder.DataDatadogLogsArchivesOrder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogLogsArchivesOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogLogsArchivesOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogLogsArchivesOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/logs_archives_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogLogsArchivesOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.archiveIds">ArchiveIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ArchiveIds`<sup>Required</sup> <a name="ArchiveIds" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.archiveIds"></a>

```go
func ArchiveIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogLogsArchivesOrderConfig <a name="DataDatadogLogsArchivesOrderConfig" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadoglogsarchivesorder"

&datadatadoglogsarchivesorder.DataDatadogLogsArchivesOrderConfig {
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/logs_archives_order#id DataDatadogLogsArchivesOrder#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogLogsArchivesOrder.DataDatadogLogsArchivesOrderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/logs_archives_order#id DataDatadogLogsArchivesOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



