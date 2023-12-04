# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-datadog.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettings(scope: Construct, id: string, config?: OrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings"></a>

```typescript
public putSettings(value: OrganizationSettingsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.resetSettings"></a>

```typescript
public resetSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isConstruct"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

organizationSettings.OrganizationSettings.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

organizationSettings.OrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

organizationSettings.OrganizationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

organizationSettings.OrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId">publicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.publicId"></a>

```typescript
public readonly publicId: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settings"></a>

```typescript
public readonly settings: OrganizationSettingsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference">OrganizationSettingsSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.settingsInput"></a>

```typescript
public readonly settingsInput: OrganizationSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsConfig: organizationSettings.OrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name">name</a></code> | <code>string</code> | Name for Organization. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsConfig.property.settings"></a>

```typescript
public readonly settings: OrganizationSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#settings OrganizationSettings#settings}

---

### OrganizationSettingsSettings <a name="OrganizationSettingsSettings" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsSettings: organizationSettings.OrganizationSettingsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode">samlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | saml_strict_mode block. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare">privateWidgetShare</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole">samlAutocreateAccessRole</a></code> | <code>string</code> | The access role of the user. |

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.saml"></a>

```typescript
public readonly saml: OrganizationSettingsSettingsSaml;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#saml OrganizationSettings#saml}

---

##### `samlAutocreateUsersDomains`<sup>Required</sup> <a name="samlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```typescript
public readonly samlAutocreateUsersDomains: OrganizationSettingsSettingsSamlAutocreateUsersDomains;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#saml_autocreate_users_domains OrganizationSettings#saml_autocreate_users_domains}

---

##### `samlIdpInitiatedLogin`<sup>Required</sup> <a name="samlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```typescript
public readonly samlIdpInitiatedLogin: OrganizationSettingsSettingsSamlIdpInitiatedLogin;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#saml_idp_initiated_login OrganizationSettings#saml_idp_initiated_login}

---

##### `samlStrictMode`<sup>Required</sup> <a name="samlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlStrictMode"></a>

```typescript
public readonly samlStrictMode: OrganizationSettingsSettingsSamlStrictMode;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#saml_strict_mode OrganizationSettings#saml_strict_mode}

---

##### `privateWidgetShare`<sup>Optional</sup> <a name="privateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.privateWidgetShare"></a>

```typescript
public readonly privateWidgetShare: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the organization users can share widgets outside of Datadog. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#private_widget_share OrganizationSettings#private_widget_share}

---

##### `samlAutocreateAccessRole`<sup>Optional</sup> <a name="samlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings.property.samlAutocreateAccessRole"></a>

```typescript
public readonly samlAutocreateAccessRole: string;
```

- *Type:* string

The access role of the user.

Options are `st` (standard user), `adm` (admin user), or `ro` (read-only user). Allowed enum values: `st`, `adm` , `ro`, `ERROR` Defaults to `"st"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#saml_autocreate_access_role OrganizationSettings#saml_autocreate_access_role}

---

### OrganizationSettingsSettingsSaml <a name="OrganizationSettingsSettingsSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsSettingsSaml: organizationSettings.OrganizationSettingsSettingsSaml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not SAML is enabled for this organization. Defaults to `false`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not SAML is enabled for this organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsSettingsSamlAutocreateUsersDomains: organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains">domains</a></code> | <code>string[]</code> | List of domains where the SAML automated user creation is enabled. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

List of domains where the SAML automated user creation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#domains OrganizationSettings#domains}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the automated user creation based on SAML domain is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="OrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsSettingsSamlIdpInitiatedLogin: organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not a SAML identity provider metadata file was provided to the Datadog organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

### OrganizationSettingsSettingsSamlStrictMode <a name="OrganizationSettingsSettingsSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

const organizationSettingsSettingsSamlStrictMode: organizationSettings.OrganizationSettingsSettingsSamlStrictMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the SAML strict mode is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the SAML strict mode is enabled.

If true, all users must log in with SAML. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/organization_settings#enabled OrganizationSettings#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationSettingsSettingsOutputReference <a name="OrganizationSettingsSettingsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettingsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">putSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">putSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode">putSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare">resetPrivateWidgetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole">resetSamlAutocreateAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSaml` <a name="putSaml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml"></a>

```typescript
public putSaml(value: OrganizationSettingsSettingsSaml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `putSamlAutocreateUsersDomains` <a name="putSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```typescript
public putSamlAutocreateUsersDomains(value: OrganizationSettingsSettingsSamlAutocreateUsersDomains): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `putSamlIdpInitiatedLogin` <a name="putSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```typescript
public putSamlIdpInitiatedLogin(value: OrganizationSettingsSettingsSamlIdpInitiatedLogin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `putSamlStrictMode` <a name="putSamlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```typescript
public putSamlStrictMode(value: OrganizationSettingsSettingsSamlStrictMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `resetPrivateWidgetShare` <a name="resetPrivateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetPrivateWidgetShare"></a>

```typescript
public resetPrivateWidgetShare(): void
```

##### `resetSamlAutocreateAccessRole` <a name="resetSamlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.resetSamlAutocreateAccessRole"></a>

```typescript
public resetSamlAutocreateAccessRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">samlCanBeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">samlIdpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">samlIdpMetadataUploaded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl">samlLoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode">samlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput">privateWidgetShareInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput">samlAutocreateAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">samlAutocreateUsersDomainsInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">samlIdpInitiatedLoginInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">samlStrictModeInput</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare">privateWidgetShare</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">samlAutocreateAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.saml"></a>

```typescript
public readonly saml: OrganizationSettingsSettingsSamlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference">OrganizationSettingsSettingsSamlOutputReference</a>

---

##### `samlAutocreateUsersDomains`<sup>Required</sup> <a name="samlAutocreateUsersDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```typescript
public readonly samlAutocreateUsersDomains: OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference">OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference</a>

---

##### `samlCanBeEnabled`<sup>Required</sup> <a name="samlCanBeEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```typescript
public readonly samlCanBeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `samlIdpEndpoint`<sup>Required</sup> <a name="samlIdpEndpoint" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```typescript
public readonly samlIdpEndpoint: string;
```

- *Type:* string

---

##### `samlIdpInitiatedLogin`<sup>Required</sup> <a name="samlIdpInitiatedLogin" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```typescript
public readonly samlIdpInitiatedLogin: OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference">OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference</a>

---

##### `samlIdpMetadataUploaded`<sup>Required</sup> <a name="samlIdpMetadataUploaded" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```typescript
public readonly samlIdpMetadataUploaded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `samlLoginUrl`<sup>Required</sup> <a name="samlLoginUrl" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```typescript
public readonly samlLoginUrl: string;
```

- *Type:* string

---

##### `samlStrictMode`<sup>Required</sup> <a name="samlStrictMode" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```typescript
public readonly samlStrictMode: OrganizationSettingsSettingsSamlStrictModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference">OrganizationSettingsSettingsSamlStrictModeOutputReference</a>

---

##### `privateWidgetShareInput`<sup>Optional</sup> <a name="privateWidgetShareInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShareInput"></a>

```typescript
public readonly privateWidgetShareInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlAutocreateAccessRoleInput`<sup>Optional</sup> <a name="samlAutocreateAccessRoleInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRoleInput"></a>

```typescript
public readonly samlAutocreateAccessRoleInput: string;
```

- *Type:* string

---

##### `samlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="samlAutocreateUsersDomainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```typescript
public readonly samlAutocreateUsersDomainsInput: OrganizationSettingsSettingsSamlAutocreateUsersDomains;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---

##### `samlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="samlIdpInitiatedLoginInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```typescript
public readonly samlIdpInitiatedLoginInput: OrganizationSettingsSettingsSamlIdpInitiatedLogin;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```typescript
public readonly samlInput: OrganizationSettingsSettingsSaml;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---

##### `samlStrictModeInput`<sup>Optional</sup> <a name="samlStrictModeInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```typescript
public readonly samlStrictModeInput: OrganizationSettingsSettingsSamlStrictMode;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---

##### `privateWidgetShare`<sup>Required</sup> <a name="privateWidgetShare" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```typescript
public readonly privateWidgetShare: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlAutocreateAccessRole`<sup>Required</sup> <a name="samlAutocreateAccessRole" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```typescript
public readonly samlAutocreateAccessRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettings">OrganizationSettingsSettings</a>

---


### OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationSettingsSettingsSamlAutocreateUsersDomains;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlAutocreateUsersDomains">OrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationSettingsSettingsSamlIdpInitiatedLogin;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlIdpInitiatedLogin">OrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### OrganizationSettingsSettingsSamlOutputReference <a name="OrganizationSettingsSettingsSamlOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettingsSettingsSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationSettingsSettingsSaml;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSaml">OrganizationSettingsSettingsSaml</a>

---


### OrganizationSettingsSettingsSamlStrictModeOutputReference <a name="OrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```typescript
import { organizationSettings } from '@cdktf/provider-datadog'

new organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationSettingsSettingsSamlStrictMode;
```

- *Type:* <a href="#@cdktf/provider-datadog.organizationSettings.OrganizationSettingsSettingsSamlStrictMode">OrganizationSettingsSettingsSamlStrictMode</a>

---



