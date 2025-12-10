# `dataDatadogReferenceTable` Submodule <a name="`dataDatadogReferenceTable` Submodule" id="@cdktf/provider-datadog.dataDatadogReferenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTable <a name="DataDatadogReferenceTable" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTable(scope Construct, id *string, config DataDatadogReferenceTableConfig) DataDatadogReferenceTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig">DataDatadogReferenceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema"></a>

```go
func PutSchema(value DataDatadogReferenceTableSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId"></a>

```go
func ResetId()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName"></a>

```go
func ResetTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.DataDatadogReferenceTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.DataDatadogReferenceTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.DataDatadogReferenceTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.DataDatadogReferenceTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogReferenceTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount">RowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata"></a>

```go
func FileMetadata() DataDatadogReferenceTableFileMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a>

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount"></a>

```go
func RowCount() *f64
```

- *Type:* *f64

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema"></a>

```go
func Schema() DataDatadogReferenceTableSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableConfig <a name="DataDatadogReferenceTableConfig" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Schema: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.dataDatadogReferenceTable.DataDatadogReferenceTableSchema,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id">Id</a></code> | <code>*string</code> | The UUID of the reference table. Either id or table_name must be specified, but not both. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the reference table. Either id or table_name must be specified, but not both. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The UUID of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#id DataDatadogReferenceTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema"></a>

```go
Schema DataDatadogReferenceTableSchema
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#schema DataDatadogReferenceTable#schema}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#table_name DataDatadogReferenceTable#table_name}

---

### DataDatadogReferenceTableFileMetadata <a name="DataDatadogReferenceTableFileMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableFileMetadata {

}
```


### DataDatadogReferenceTableFileMetadataAccessDetails <a name="DataDatadogReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableFileMetadataAccessDetails {

}
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail {

}
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail {

}
```


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail {

}
```


### DataDatadogReferenceTableSchema <a name="DataDatadogReferenceTableSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableSchema {
	Fields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#fields DataDatadogReferenceTable#fields}

---

### DataDatadogReferenceTableSchemaFields <a name="DataDatadogReferenceTableSchemaFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

&datadatadogreferencetable.DataDatadogReferenceTableSchemaFields {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">AwsBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsBucketName`<sup>Required</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```go
func AwsBucketName() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">AzureContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureClientId`<sup>Required</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```go
func AzureClientId() *string
```

- *Type:* *string

---

##### `AzureContainerName`<sup>Required</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```go
func AzureContainerName() *string
```

- *Type:* *string

---

##### `AzureStorageAccountName`<sup>Required</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```go
func AzureStorageAccountName() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">GcpBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `GcpBucketName`<sup>Required</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```go
func GcpBucketName() *string
```

- *Type:* *string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```go
func GcpProjectId() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableFileMetadataAccessDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsDetail`<sup>Required</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```go
func AwsDetail() DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `AzureDetail`<sup>Required</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```go
func AzureDetail() DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `GcpDetail`<sup>Required</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```go
func GcpDetail() DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableFileMetadataOutputReference <a name="DataDatadogReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableFileMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableFileMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount">ErrorRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType">ErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled">SyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDetails`<sup>Required</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```go
func AccessDetails() DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ErrorRowCount`<sup>Required</sup> <a name="ErrorRowCount" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```go
func ErrorRowCount() *f64
```

- *Type:* *f64

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType"></a>

```go
func ErrorType() *string
```

- *Type:* *string

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```go
func SyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableSchemaFieldsList <a name="DataDatadogReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogReferenceTableSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get"></a>

```go
func Get(index *f64) DataDatadogReferenceTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableSchemaFieldsOutputReference <a name="DataDatadogReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogReferenceTableSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogReferenceTableSchemaOutputReference <a name="DataDatadogReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogreferencetable"

datadatadogreferencetable.NewDataDatadogReferenceTableSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogReferenceTableSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields"></a>

```go
func ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields"></a>

```go
func Fields() DataDatadogReferenceTableSchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a>

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



