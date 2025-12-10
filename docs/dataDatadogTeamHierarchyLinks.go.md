# `dataDatadogTeamHierarchyLinks` Submodule <a name="`dataDatadogTeamHierarchyLinks` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamHierarchyLinks <a name="DataDatadogTeamHierarchyLinks" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

datadatadogteamhierarchylinks.NewDataDatadogTeamHierarchyLinks(scope Construct, id *string, config DataDatadogTeamHierarchyLinksConfig) DataDatadogTeamHierarchyLinks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig">DataDatadogTeamHierarchyLinksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig">DataDatadogTeamHierarchyLinksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam">ResetFilterParentTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam">ResetFilterSubTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId">ResetLinkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilterParentTeam` <a name="ResetFilterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam"></a>

```go
func ResetFilterParentTeam()
```

##### `ResetFilterSubTeam` <a name="ResetFilterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam"></a>

```go
func ResetFilterSubTeam()
```

##### `ResetLinkId` <a name="ResetLinkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId"></a>

```go
func ResetLinkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

datadatadogteamhierarchylinks.DataDatadogTeamHierarchyLinks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

datadatadogteamhierarchylinks.DataDatadogTeamHierarchyLinks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

datadatadogteamhierarchylinks.DataDatadogTeamHierarchyLinks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

datadatadogteamhierarchylinks.DataDatadogTeamHierarchyLinks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogTeamHierarchyLinks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogTeamHierarchyLinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamHierarchyLinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy">ProvisionedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput">FilterParentTeamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput">FilterSubTeamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput">LinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam">FilterParentTeam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam">FilterSubTeam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedBy`<sup>Required</sup> <a name="ProvisionedBy" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy"></a>

```go
func ProvisionedBy() *string
```

- *Type:* *string

---

##### `FilterParentTeamInput`<sup>Optional</sup> <a name="FilterParentTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput"></a>

```go
func FilterParentTeamInput() *string
```

- *Type:* *string

---

##### `FilterSubTeamInput`<sup>Optional</sup> <a name="FilterSubTeamInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput"></a>

```go
func FilterSubTeamInput() *string
```

- *Type:* *string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput"></a>

```go
func LinkIdInput() *string
```

- *Type:* *string

---

##### `FilterParentTeam`<sup>Required</sup> <a name="FilterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam"></a>

```go
func FilterParentTeam() *string
```

- *Type:* *string

---

##### `FilterSubTeam`<sup>Required</sup> <a name="FilterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam"></a>

```go
func FilterSubTeam() *string
```

- *Type:* *string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamHierarchyLinksConfig <a name="DataDatadogTeamHierarchyLinksConfig" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/datadatadogteamhierarchylinks"

&datadatadogteamhierarchylinks.DataDatadogTeamHierarchyLinksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FilterParentTeam: *string,
	FilterSubTeam: *string,
	LinkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam">FilterParentTeam</a></code> | <code>*string</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam">FilterSubTeam</a></code> | <code>*string</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId">LinkId</a></code> | <code>*string</code> | The team hierarchy link’s identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilterParentTeam`<sup>Optional</sup> <a name="FilterParentTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam"></a>

```go
FilterParentTeam *string
```

- *Type:* *string

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `FilterSubTeam`<sup>Optional</sup> <a name="FilterSubTeam" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam"></a>

```go
FilterSubTeam *string
```

- *Type:* *string

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `LinkId`<sup>Optional</sup> <a name="LinkId" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId"></a>

```go
LinkId *string
```

- *Type:* *string

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---



