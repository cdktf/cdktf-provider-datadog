# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-datadog.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettings(scope Construct, id *string, config OrganizationSettingsConfig) OrganizationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSecurityContacts">ResetSecurityContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings"></a>

```go
func PutSettings(value OrganizationSettingsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName"></a>

```go
func ResetName()
```

##### `ResetSecurityContacts` <a name="ResetSecurityContacts" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSecurityContacts"></a>

```go
func ResetSecurityContacts()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings"></a>

```go
func ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.OrganizationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.OrganizationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.OrganizationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.OrganizationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId">PublicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.securityContactsInput">SecurityContactsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.securityContacts">SecurityContacts</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId"></a>

```go
func PublicId() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings"></a>

```go
func Settings() OrganizationSettingsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityContactsInput`<sup>Optional</sup> <a name="SecurityContactsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.securityContactsInput"></a>

```go
func SecurityContactsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput"></a>

```go
func SettingsInput() OrganizationSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityContacts`<sup>Required</sup> <a name="SecurityContacts" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.securityContacts"></a>

```go
func SecurityContacts() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	SecurityContacts: *[]*string,
	Settings: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.organizationSettings.OrganizationSettingsSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name">Name</a></code> | <code>*string</code> | Name for Organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.securityContacts">SecurityContacts</a></code> | <code>*[]*string</code> | List of emails used for security event notifications from the organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `SecurityContacts`<sup>Optional</sup> <a name="SecurityContacts" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.securityContacts"></a>

```go
SecurityContacts *[]*string
```

- *Type:* *[]*string

List of emails used for security event notifications from the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#security_contacts OrganizationSettings#security_contacts}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings"></a>

```go
Settings OrganizationSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#settings OrganizationSettings#settings}

---

### OrganizationSettingsSettings <a name="OrganizationSettingsSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsSettings {
	Saml: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.organizationSettings.OrganizationSettingsSettingsSaml,
	SamlAutocreateUsersDomains: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains,
	SamlIdpInitiatedLogin: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin,
	SamlStrictMode: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.organizationSettings.OrganizationSettingsSettingsSamlStrictMode,
	PrivateWidgetShare: interface{},
	SamlAutocreateAccessRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | saml_strict_mode block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>interface{}</code> | Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>*string</code> | The access role of the user. |

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml"></a>

```go
Saml OrganizationSettingsSettingsSaml
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#saml OrganizationSettings#saml}

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```go
SamlAutocreateUsersDomains OrganizationSettingsSettingsSamlAutocreateUsersDomains
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```go
SamlIdpInitiatedLogin OrganizationSettingsSettingsSamlIdpInitiatedLogin
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode"></a>

```go
SamlStrictMode OrganizationSettingsSettingsSamlStrictMode
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#saml_strict_mode OrganizationSettings#saml_strict_mode}

---

##### `PrivateWidgetShare`<sup>Optional</sup> <a name="PrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare"></a>

```go
PrivateWidgetShare interface{}
```

- *Type:* interface{}

Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#private_widget_share OrganizationSettings#private_widget_share}

---

##### `SamlAutocreateAccessRole`<sup>Optional</sup> <a name="SamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole"></a>

```go
SamlAutocreateAccessRole *string
```

- *Type:* *string

The access role of the user.

Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR` Defaults to `"st"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}

---

### OrganizationSettingsSettingsSaml <a name="OrganizationSettingsSettingsSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsSettingsSaml {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not SAML is enabled for this organization. Defaults to `false`. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not SAML is enabled for this organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains {
	Domains: *[]*string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains">Domains</a></code> | <code>*[]*string</code> | List of domains where the SAML automated user creation is enabled. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

List of domains where the SAML automated user creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#domains OrganizationSettings#domains}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="OrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlStrictMode <a name="OrganizationSettingsSettingsSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

&organizationsettings.OrganizationSettingsSettingsSamlStrictMode {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not the SAML strict mode is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not the SAML strict mode is enabled.

If true, all users must log in with SAML. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationSettingsSettingsOutputReference <a name="OrganizationSettingsSettingsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettingsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationSettingsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">PutSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">PutSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode">PutSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare">ResetPrivateWidgetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole">ResetSamlAutocreateAccessRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml"></a>

```go
func PutSaml(value OrganizationSettingsSettingsSaml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `PutSamlAutocreateUsersDomains` <a name="PutSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```go
func PutSamlAutocreateUsersDomains(value OrganizationSettingsSettingsSamlAutocreateUsersDomains)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `PutSamlIdpInitiatedLogin` <a name="PutSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```go
func PutSamlIdpInitiatedLogin(value OrganizationSettingsSettingsSamlIdpInitiatedLogin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `PutSamlStrictMode` <a name="PutSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```go
func PutSamlStrictMode(value OrganizationSettingsSettingsSamlStrictMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `ResetPrivateWidgetShare` <a name="ResetPrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare"></a>

```go
func ResetPrivateWidgetShare()
```

##### `ResetSamlAutocreateAccessRole` <a name="ResetSamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole"></a>

```go
func ResetSamlAutocreateAccessRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">SamlCanBeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">SamlIdpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">SamlIdpMetadataUploaded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl">SamlLoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput">PrivateWidgetShareInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput">SamlAutocreateAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">SamlAutocreateUsersDomainsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">SamlIdpInitiatedLoginInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">SamlStrictModeInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml"></a>

```go
func Saml() OrganizationSettingsSettingsSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a>

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```go
func SamlAutocreateUsersDomains() OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a>

---

##### `SamlCanBeEnabled`<sup>Required</sup> <a name="SamlCanBeEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```go
func SamlCanBeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SamlIdpEndpoint`<sup>Required</sup> <a name="SamlIdpEndpoint" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```go
func SamlIdpEndpoint() *string
```

- *Type:* *string

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```go
func SamlIdpInitiatedLogin() OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a>

---

##### `SamlIdpMetadataUploaded`<sup>Required</sup> <a name="SamlIdpMetadataUploaded" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```go
func SamlIdpMetadataUploaded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SamlLoginUrl`<sup>Required</sup> <a name="SamlLoginUrl" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```go
func SamlLoginUrl() *string
```

- *Type:* *string

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```go
func SamlStrictMode() OrganizationSettingsSettingsSamlStrictModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a>

---

##### `PrivateWidgetShareInput`<sup>Optional</sup> <a name="PrivateWidgetShareInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput"></a>

```go
func PrivateWidgetShareInput() interface{}
```

- *Type:* interface{}

---

##### `SamlAutocreateAccessRoleInput`<sup>Optional</sup> <a name="SamlAutocreateAccessRoleInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput"></a>

```go
func SamlAutocreateAccessRoleInput() *string
```

- *Type:* *string

---

##### `SamlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="SamlAutocreateUsersDomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```go
func SamlAutocreateUsersDomainsInput() OrganizationSettingsSettingsSamlAutocreateUsersDomains
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `SamlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="SamlIdpInitiatedLoginInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```go
func SamlIdpInitiatedLoginInput() OrganizationSettingsSettingsSamlIdpInitiatedLogin
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```go
func SamlInput() OrganizationSettingsSettingsSaml
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `SamlStrictModeInput`<sup>Optional</sup> <a name="SamlStrictModeInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```go
func SamlStrictModeInput() OrganizationSettingsSettingsSamlStrictMode
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `PrivateWidgetShare`<sup>Required</sup> <a name="PrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```go
func PrivateWidgetShare() interface{}
```

- *Type:* interface{}

---

##### `SamlAutocreateAccessRole`<sup>Required</sup> <a name="SamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```go
func SamlAutocreateAccessRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---


### OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationSettingsSettingsSamlAutocreateUsersDomains
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationSettingsSettingsSamlIdpInitiatedLogin
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### OrganizationSettingsSettingsSamlOutputReference <a name="OrganizationSettingsSettingsSamlOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettingsSettingsSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationSettingsSettingsSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationSettingsSettingsSaml
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---


### OrganizationSettingsSettingsSamlStrictModeOutputReference <a name="OrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/organizationsettings"

organizationsettings.NewOrganizationSettingsSettingsSamlStrictModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationSettingsSettingsSamlStrictModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationSettingsSettingsSamlStrictMode
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---



