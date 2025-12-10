# `referenceTable` Submodule <a name="`referenceTable` Submodule" id="@cdktf/provider-datadog.referenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReferenceTable <a name="ReferenceTable" id="@cdktf/provider-datadog.referenceTable.ReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTable(scope Construct, id *string, config ReferenceTableConfig) ReferenceTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig">ReferenceTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig">ReferenceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata">PutFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata">ResetFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileMetadata` <a name="PutFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata"></a>

```go
func PutFileMetadata(value ReferenceTableFileMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema"></a>

```go
func PutSchema(value ReferenceTableSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFileMetadata` <a name="ResetFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata"></a>

```go
func ResetFileMetadata()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.ReferenceTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.ReferenceTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.ReferenceTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.ReferenceTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ReferenceTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount">RowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput">FileMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata"></a>

```go
func FileMetadata() ReferenceTableFileMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount"></a>

```go
func RowCount() *f64
```

- *Type:* *f64

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema"></a>

```go
func Schema() ReferenceTableSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FileMetadataInput`<sup>Optional</sup> <a name="FileMetadataInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput"></a>

```go
func FileMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReferenceTableConfig <a name="ReferenceTableConfig" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Source: *string,
	TableName: *string,
	Description: *string,
	FileMetadata: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableFileMetadata,
	Schema: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableSchema,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source">Source</a></code> | <code>*string</code> | The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the reference table. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description">Description</a></code> | <code>*string</code> | The description of the reference table. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | file_metadata block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tags to associate with the reference table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#source ReferenceTable#source}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the reference table. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#table_name ReferenceTable#table_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#description ReferenceTable#description}

---

##### `FileMetadata`<sup>Optional</sup> <a name="FileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata"></a>

```go
FileMetadata ReferenceTableFileMetadata
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

file_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_metadata ReferenceTable#file_metadata}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema"></a>

```go
Schema ReferenceTableSchema
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#schema ReferenceTable#schema}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tags to associate with the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#tags ReferenceTable#tags}

---

### ReferenceTableFileMetadata <a name="ReferenceTableFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableFileMetadata {
	SyncEnabled: interface{},
	AccessDetails: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableFileMetadataAccessDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled">SyncEnabled</a></code> | <code>interface{}</code> | Whether this table should automatically sync with the cloud storage source. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | access_details block. |

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled"></a>

```go
SyncEnabled interface{}
```

- *Type:* interface{}

Whether this table should automatically sync with the cloud storage source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#sync_enabled ReferenceTable#sync_enabled}

---

##### `AccessDetails`<sup>Optional</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails"></a>

```go
AccessDetails ReferenceTableFileMetadataAccessDetails
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#access_details ReferenceTable#access_details}

---

### ReferenceTableFileMetadataAccessDetails <a name="ReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableFileMetadataAccessDetails {
	AwsDetail: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail,
	AzureDetail: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail,
	GcpDetail: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | aws_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | azure_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | gcp_detail block. |

---

##### `AwsDetail`<sup>Optional</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail"></a>

```go
AwsDetail ReferenceTableFileMetadataAccessDetailsAwsDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

aws_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_detail ReferenceTable#aws_detail}

---

##### `AzureDetail`<sup>Optional</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail"></a>

```go
AzureDetail ReferenceTableFileMetadataAccessDetailsAzureDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

azure_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_detail ReferenceTable#azure_detail}

---

##### `GcpDetail`<sup>Optional</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail"></a>

```go
GcpDetail ReferenceTableFileMetadataAccessDetailsGcpDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

gcp_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_detail ReferenceTable#gcp_detail}

---

### ReferenceTableFileMetadataAccessDetailsAwsDetail <a name="ReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableFileMetadataAccessDetailsAwsDetail {
	AwsAccountId: *string,
	AwsBucketName: *string,
	FilePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | The ID of the AWS account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName">AwsBucketName</a></code> | <code>*string</code> | The name of the AWS S3 bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath">FilePath</a></code> | <code>*string</code> | The relative file path from the AWS S3 bucket root to the CSV file. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

The ID of the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_account_id ReferenceTable#aws_account_id}

---

##### `AwsBucketName`<sup>Optional</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName"></a>

```go
AwsBucketName *string
```

- *Type:* *string

The name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_bucket_name ReferenceTable#aws_bucket_name}

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

The relative file path from the AWS S3 bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsAzureDetail <a name="ReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableFileMetadataAccessDetailsAzureDetail {
	AzureClientId: *string,
	AzureContainerName: *string,
	AzureStorageAccountName: *string,
	AzureTenantId: *string,
	FilePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | The Azure client ID (application ID). |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName">AzureContainerName</a></code> | <code>*string</code> | The name of the Azure container. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>*string</code> | The name of the Azure storage account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | The ID of the Azure tenant. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath">FilePath</a></code> | <code>*string</code> | The relative file path from the Azure container root to the CSV file. |

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId"></a>

```go
AzureClientId *string
```

- *Type:* *string

The Azure client ID (application ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_client_id ReferenceTable#azure_client_id}

---

##### `AzureContainerName`<sup>Optional</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName"></a>

```go
AzureContainerName *string
```

- *Type:* *string

The name of the Azure container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_container_name ReferenceTable#azure_container_name}

---

##### `AzureStorageAccountName`<sup>Optional</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName"></a>

```go
AzureStorageAccountName *string
```

- *Type:* *string

The name of the Azure storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_storage_account_name ReferenceTable#azure_storage_account_name}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

The ID of the Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_tenant_id ReferenceTable#azure_tenant_id}

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

The relative file path from the Azure container root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsGcpDetail <a name="ReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableFileMetadataAccessDetailsGcpDetail {
	FilePath: *string,
	GcpBucketName: *string,
	GcpProjectId: *string,
	GcpServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath">FilePath</a></code> | <code>*string</code> | The relative file path from the GCS bucket root to the CSV file. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName">GcpBucketName</a></code> | <code>*string</code> | The name of the GCP bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | The ID of the GCP project. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | The email of the GCP service account used to access the bucket. |

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

The relative file path from the GCS bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

##### `GcpBucketName`<sup>Optional</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName"></a>

```go
GcpBucketName *string
```

- *Type:* *string

The name of the GCP bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_bucket_name ReferenceTable#gcp_bucket_name}

---

##### `GcpProjectId`<sup>Optional</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId"></a>

```go
GcpProjectId *string
```

- *Type:* *string

The ID of the GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_project_id ReferenceTable#gcp_project_id}

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail"></a>

```go
GcpServiceAccountEmail *string
```

- *Type:* *string

The email of the GCP service account used to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_service_account_email ReferenceTable#gcp_service_account_email}

---

### ReferenceTableSchema <a name="ReferenceTableSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableSchema {
	Fields: interface{},
	PrimaryKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | List of field names that serve as primary keys for the table. Currently only one primary key is supported. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#fields ReferenceTable#fields}

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys"></a>

```go
PrimaryKeys *[]*string
```

- *Type:* *[]*string

List of field names that serve as primary keys for the table. Currently only one primary key is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#primary_keys ReferenceTable#primary_keys}

---

### ReferenceTableSchemaFields <a name="ReferenceTableSchemaFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

&referencetable.ReferenceTableSchemaFields {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name">Name</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type">Type</a></code> | <code>*string</code> | The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#name ReferenceTable#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type"></a>

```go
Type *string
```

- *Type:* *string

The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#type ReferenceTable#type}

---

## Classes <a name="Classes" id="Classes"></a>

### ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName">ResetAwsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetAwsBucketName` <a name="ResetAwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName"></a>

```go
func ResetAwsBucketName()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput">AwsBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">AwsBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsBucketNameInput`<sup>Optional</sup> <a name="AwsBucketNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput"></a>

```go
func AwsBucketNameInput() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsBucketName`<sup>Required</sup> <a name="AwsBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```go
func AwsBucketName() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId">ResetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName">ResetAzureContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName">ResetAzureStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId"></a>

```go
func ResetAzureClientId()
```

##### `ResetAzureContainerName` <a name="ResetAzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName"></a>

```go
func ResetAzureContainerName()
```

##### `ResetAzureStorageAccountName` <a name="ResetAzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName"></a>

```go
func ResetAzureStorageAccountName()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput">AzureContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput">AzureStorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">AzureContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">AzureStorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput"></a>

```go
func AzureClientIdInput() *string
```

- *Type:* *string

---

##### `AzureContainerNameInput`<sup>Optional</sup> <a name="AzureContainerNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput"></a>

```go
func AzureContainerNameInput() *string
```

- *Type:* *string

---

##### `AzureStorageAccountNameInput`<sup>Optional</sup> <a name="AzureStorageAccountNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput"></a>

```go
func AzureStorageAccountNameInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `AzureClientId`<sup>Required</sup> <a name="AzureClientId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```go
func AzureClientId() *string
```

- *Type:* *string

---

##### `AzureContainerName`<sup>Required</sup> <a name="AzureContainerName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```go
func AzureContainerName() *string
```

- *Type:* *string

---

##### `AzureStorageAccountName`<sup>Required</sup> <a name="AzureStorageAccountName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```go
func AzureStorageAccountName() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName">ResetGcpBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId">ResetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetGcpBucketName` <a name="ResetGcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName"></a>

```go
func ResetGcpBucketName()
```

##### `ResetGcpProjectId` <a name="ResetGcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId"></a>

```go
func ResetGcpProjectId()
```

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail"></a>

```go
func ResetGcpServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput">GcpBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput">GcpProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">GcpBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `GcpBucketNameInput`<sup>Optional</sup> <a name="GcpBucketNameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput"></a>

```go
func GcpBucketNameInput() *string
```

- *Type:* *string

---

##### `GcpProjectIdInput`<sup>Optional</sup> <a name="GcpProjectIdInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput"></a>

```go
func GcpProjectIdInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput"></a>

```go
func GcpServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `GcpBucketName`<sup>Required</sup> <a name="GcpBucketName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```go
func GcpBucketName() *string
```

- *Type:* *string

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```go
func GcpProjectId() *string
```

- *Type:* *string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```go
func GcpServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableFileMetadataAccessDetailsOutputReference <a name="ReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableFileMetadataAccessDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableFileMetadataAccessDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail">PutAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail">PutAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail">PutGcpDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail">ResetAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail">ResetAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail">ResetGcpDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsDetail` <a name="PutAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail"></a>

```go
func PutAwsDetail(value ReferenceTableFileMetadataAccessDetailsAwsDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---

##### `PutAzureDetail` <a name="PutAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail"></a>

```go
func PutAzureDetail(value ReferenceTableFileMetadataAccessDetailsAzureDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---

##### `PutGcpDetail` <a name="PutGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail"></a>

```go
func PutGcpDetail(value ReferenceTableFileMetadataAccessDetailsGcpDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---

##### `ResetAwsDetail` <a name="ResetAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail"></a>

```go
func ResetAwsDetail()
```

##### `ResetAzureDetail` <a name="ResetAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail"></a>

```go
func ResetAzureDetail()
```

##### `ResetGcpDetail` <a name="ResetGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail"></a>

```go
func ResetGcpDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">AwsDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">AzureDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">GcpDetail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput">AwsDetailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput">AzureDetailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput">GcpDetailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsDetail`<sup>Required</sup> <a name="AwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```go
func AwsDetail() ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `AzureDetail`<sup>Required</sup> <a name="AzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```go
func AzureDetail() ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `GcpDetail`<sup>Required</sup> <a name="GcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```go
func GcpDetail() ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `AwsDetailInput`<sup>Optional</sup> <a name="AwsDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput"></a>

```go
func AwsDetailInput() interface{}
```

- *Type:* interface{}

---

##### `AzureDetailInput`<sup>Optional</sup> <a name="AzureDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput"></a>

```go
func AzureDetailInput() interface{}
```

- *Type:* interface{}

---

##### `GcpDetailInput`<sup>Optional</sup> <a name="GcpDetailInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput"></a>

```go
func GcpDetailInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableFileMetadataOutputReference <a name="ReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableFileMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableFileMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails">PutAccessDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails">ResetAccessDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessDetails` <a name="PutAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails"></a>

```go
func PutAccessDetails(value ReferenceTableFileMetadataAccessDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---

##### `ResetAccessDetails` <a name="ResetAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails"></a>

```go
func ResetAccessDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails">AccessDetails</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount">ErrorRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType">ErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput">AccessDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput">SyncEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled">SyncEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDetails`<sup>Required</sup> <a name="AccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```go
func AccessDetails() ReferenceTableFileMetadataAccessDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ErrorRowCount`<sup>Required</sup> <a name="ErrorRowCount" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```go
func ErrorRowCount() *f64
```

- *Type:* *f64

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType"></a>

```go
func ErrorType() *string
```

- *Type:* *string

---

##### `AccessDetailsInput`<sup>Optional</sup> <a name="AccessDetailsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput"></a>

```go
func AccessDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `SyncEnabledInput`<sup>Optional</sup> <a name="SyncEnabledInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput"></a>

```go
func SyncEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SyncEnabled`<sup>Required</sup> <a name="SyncEnabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```go
func SyncEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableSchemaFieldsList <a name="ReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ReferenceTableSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get"></a>

```go
func Get(index *f64) ReferenceTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableSchemaFieldsOutputReference <a name="ReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ReferenceTableSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReferenceTableSchemaOutputReference <a name="ReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/referencetable"

referencetable.NewReferenceTableSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReferenceTableSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys"></a>

```go
func ResetPrimaryKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields"></a>

```go
func Fields() ReferenceTableSchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput"></a>

```go
func PrimaryKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



