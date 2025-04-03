# `dataDatadogTeamMemberships` Submodule <a name="`dataDatadogTeamMemberships` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamMemberships <a name="DataDatadogTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/team_memberships datadog_team_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.NewDataDatadogTeamMemberships(scope Construct, id *string, config DataDatadogTeamMembershipsConfig) DataDatadogTeamMemberships
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig">DataDatadogTeamMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig">DataDatadogTeamMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword">ResetFilterKeyword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetFilterKeyword` <a name="ResetFilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.resetFilterKeyword"></a>

```go
func ResetFilterKeyword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.DataDatadogTeamMemberships_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.DataDatadogTeamMemberships_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.DataDatadogTeamMemberships_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.DataDatadogTeamMemberships_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogTeamMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogTeamMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogTeamMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/team_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships">TeamMemberships</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput">ExactMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput">FilterKeywordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword">FilterKeyword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TeamMemberships`<sup>Required</sup> <a name="TeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamMemberships"></a>

```go
func TeamMemberships() DataDatadogTeamMembershipsTeamMembershipsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList">DataDatadogTeamMembershipsTeamMembershipsList</a>

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatchInput"></a>

```go
func ExactMatchInput() interface{}
```

- *Type:* interface{}

---

##### `FilterKeywordInput`<sup>Optional</sup> <a name="FilterKeywordInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeywordInput"></a>

```go
func FilterKeywordInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.exactMatch"></a>

```go
func ExactMatch() interface{}
```

- *Type:* interface{}

---

##### `FilterKeyword`<sup>Required</sup> <a name="FilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.filterKeyword"></a>

```go
func FilterKeyword() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMemberships.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamMembershipsConfig <a name="DataDatadogTeamMembershipsConfig" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

&datadatadogteammemberships.DataDatadogTeamMembershipsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TeamId: *string,
	ExactMatch: interface{},
	FilterKeyword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The team's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword">FilterKeyword</a></code> | <code>*string</code> | Search query, can be user email or name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The team's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/team_memberships#team_id DataDatadogTeamMemberships#team_id}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.exactMatch"></a>

```go
ExactMatch interface{}
```

- *Type:* interface{}

When true, `filter_keyword` string is exact matched against the user's `email`, followed by `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/team_memberships#exact_match DataDatadogTeamMemberships#exact_match}

---

##### `FilterKeyword`<sup>Optional</sup> <a name="FilterKeyword" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsConfig.property.filterKeyword"></a>

```go
FilterKeyword *string
```

- *Type:* *string

Search query, can be user email or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/team_memberships#filter_keyword DataDatadogTeamMemberships#filter_keyword}

---

### DataDatadogTeamMembershipsTeamMemberships <a name="DataDatadogTeamMembershipsTeamMemberships" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

&datadatadogteammemberships.DataDatadogTeamMembershipsTeamMemberships {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamMembershipsTeamMembershipsList <a name="DataDatadogTeamMembershipsTeamMembershipsList" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.NewDataDatadogTeamMembershipsTeamMembershipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogTeamMembershipsTeamMembershipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get"></a>

```go
func Get(index *f64) DataDatadogTeamMembershipsTeamMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogTeamMembershipsTeamMembershipsOutputReference <a name="DataDatadogTeamMembershipsTeamMembershipsOutputReference" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/datadatadogteammemberships"

datadatadogteammemberships.NewDataDatadogTeamMembershipsTeamMembershipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogTeamMembershipsTeamMembershipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMembershipsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogTeamMembershipsTeamMemberships
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamMemberships.DataDatadogTeamMembershipsTeamMemberships">DataDatadogTeamMembershipsTeamMemberships</a>

---



