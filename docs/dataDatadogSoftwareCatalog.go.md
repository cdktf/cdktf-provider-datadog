# `dataDatadogSoftwareCatalog` Submodule <a name="`dataDatadogSoftwareCatalog` Submodule" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSoftwareCatalog <a name="DataDatadogSoftwareCatalog" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog datadog_software_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.NewDataDatadogSoftwareCatalog(scope Construct, id *string, config DataDatadogSoftwareCatalogConfig) DataDatadogSoftwareCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot">ResetFilterExcludeSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId">ResetFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind">ResetFilterKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName">ResetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner">ResetFilterOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef">ResetFilterRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType">ResetFilterRelationType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilterExcludeSnapshot` <a name="ResetFilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot"></a>

```go
func ResetFilterExcludeSnapshot()
```

##### `ResetFilterId` <a name="ResetFilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId"></a>

```go
func ResetFilterId()
```

##### `ResetFilterKind` <a name="ResetFilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind"></a>

```go
func ResetFilterKind()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName"></a>

```go
func ResetFilterName()
```

##### `ResetFilterOwner` <a name="ResetFilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner"></a>

```go
func ResetFilterOwner()
```

##### `ResetFilterRef` <a name="ResetFilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef"></a>

```go
func ResetFilterRef()
```

##### `ResetFilterRelationType` <a name="ResetFilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType"></a>

```go
func ResetFilterRelationType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.DataDatadogSoftwareCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.DataDatadogSoftwareCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.DataDatadogSoftwareCatalog_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.DataDatadogSoftwareCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogSoftwareCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogSoftwareCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSoftwareCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities">Entities</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput">FilterExcludeSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput">FilterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput">FilterKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput">FilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput">FilterOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput">FilterRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput">FilterRelationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot">FilterExcludeSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId">FilterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind">FilterKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName">FilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner">FilterOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef">FilterRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType">FilterRelationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities"></a>

```go
func Entities() DataDatadogSoftwareCatalogEntitiesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FilterExcludeSnapshotInput`<sup>Optional</sup> <a name="FilterExcludeSnapshotInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput"></a>

```go
func FilterExcludeSnapshotInput() *string
```

- *Type:* *string

---

##### `FilterIdInput`<sup>Optional</sup> <a name="FilterIdInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput"></a>

```go
func FilterIdInput() *string
```

- *Type:* *string

---

##### `FilterKindInput`<sup>Optional</sup> <a name="FilterKindInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput"></a>

```go
func FilterKindInput() *string
```

- *Type:* *string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput"></a>

```go
func FilterNameInput() *string
```

- *Type:* *string

---

##### `FilterOwnerInput`<sup>Optional</sup> <a name="FilterOwnerInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput"></a>

```go
func FilterOwnerInput() *string
```

- *Type:* *string

---

##### `FilterRefInput`<sup>Optional</sup> <a name="FilterRefInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput"></a>

```go
func FilterRefInput() *string
```

- *Type:* *string

---

##### `FilterRelationTypeInput`<sup>Optional</sup> <a name="FilterRelationTypeInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput"></a>

```go
func FilterRelationTypeInput() *string
```

- *Type:* *string

---

##### `FilterExcludeSnapshot`<sup>Required</sup> <a name="FilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot"></a>

```go
func FilterExcludeSnapshot() *string
```

- *Type:* *string

---

##### `FilterId`<sup>Required</sup> <a name="FilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId"></a>

```go
func FilterId() *string
```

- *Type:* *string

---

##### `FilterKind`<sup>Required</sup> <a name="FilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind"></a>

```go
func FilterKind() *string
```

- *Type:* *string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName"></a>

```go
func FilterName() *string
```

- *Type:* *string

---

##### `FilterOwner`<sup>Required</sup> <a name="FilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner"></a>

```go
func FilterOwner() *string
```

- *Type:* *string

---

##### `FilterRef`<sup>Required</sup> <a name="FilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef"></a>

```go
func FilterRef() *string
```

- *Type:* *string

---

##### `FilterRelationType`<sup>Required</sup> <a name="FilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType"></a>

```go
func FilterRelationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSoftwareCatalogConfig <a name="DataDatadogSoftwareCatalogConfig" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

&datadatadogsoftwarecatalog.DataDatadogSoftwareCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FilterExcludeSnapshot: *string,
	FilterId: *string,
	FilterKind: *string,
	FilterName: *string,
	FilterOwner: *string,
	FilterRef: *string,
	FilterRelationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot">FilterExcludeSnapshot</a></code> | <code>*string</code> | Filter entities by excluding snapshotted entities. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId">FilterId</a></code> | <code>*string</code> | Filter entities by UUID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind">FilterKind</a></code> | <code>*string</code> | Filter entities by kind. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName">FilterName</a></code> | <code>*string</code> | Filter entities by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner">FilterOwner</a></code> | <code>*string</code> | Filter entities by owner. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef">FilterRef</a></code> | <code>*string</code> | Filter entities by reference. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType">FilterRelationType</a></code> | <code>*string</code> | Filter entities by relation type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilterExcludeSnapshot`<sup>Optional</sup> <a name="FilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot"></a>

```go
FilterExcludeSnapshot *string
```

- *Type:* *string

Filter entities by excluding snapshotted entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}

---

##### `FilterId`<sup>Optional</sup> <a name="FilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId"></a>

```go
FilterId *string
```

- *Type:* *string

Filter entities by UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}

---

##### `FilterKind`<sup>Optional</sup> <a name="FilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind"></a>

```go
FilterKind *string
```

- *Type:* *string

Filter entities by kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName"></a>

```go
FilterName *string
```

- *Type:* *string

Filter entities by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}

---

##### `FilterOwner`<sup>Optional</sup> <a name="FilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner"></a>

```go
FilterOwner *string
```

- *Type:* *string

Filter entities by owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}

---

##### `FilterRef`<sup>Optional</sup> <a name="FilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef"></a>

```go
FilterRef *string
```

- *Type:* *string

Filter entities by reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}

---

##### `FilterRelationType`<sup>Optional</sup> <a name="FilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType"></a>

```go
FilterRelationType *string
```

- *Type:* *string

Filter entities by relation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}

---

### DataDatadogSoftwareCatalogEntities <a name="DataDatadogSoftwareCatalogEntities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

&datadatadogsoftwarecatalog.DataDatadogSoftwareCatalogEntities {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSoftwareCatalogEntitiesList <a name="DataDatadogSoftwareCatalogEntitiesList" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.NewDataDatadogSoftwareCatalogEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogSoftwareCatalogEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get"></a>

```go
func Get(index *f64) DataDatadogSoftwareCatalogEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogSoftwareCatalogEntitiesOutputReference <a name="DataDatadogSoftwareCatalogEntitiesOutputReference" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogsoftwarecatalog"

datadatadogsoftwarecatalog.NewDataDatadogSoftwareCatalogEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogSoftwareCatalogEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogSoftwareCatalogEntities
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a>

---



