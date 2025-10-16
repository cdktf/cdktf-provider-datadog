# `gcpUcConfig` Submodule <a name="`gcpUcConfig` Submodule" id="@cdktf/provider-datadog.gcpUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpUcConfig <a name="GcpUcConfig" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config datadog_gcp_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

new gcpUcConfig.GcpUcConfig(scope: Construct, id: string, config: GcpUcConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig">GcpUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig">GcpUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.resetExportPrefix">resetExportPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExportPrefix` <a name="resetExportPrefix" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.resetExportPrefix"></a>

```typescript
public resetExportPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GcpUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

gcpUcConfig.GcpUcConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

gcpUcConfig.GcpUcConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

gcpUcConfig.GcpUcConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

gcpUcConfig.GcpUcConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GcpUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.months">months</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountIdInput">billingAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetNameInput">exportDatasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefixInput">exportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectNameInput">exportProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountId">billingAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetName">exportDatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefix">exportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectName">exportProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.months"></a>

```typescript
public readonly months: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `billingAccountIdInput`<sup>Optional</sup> <a name="billingAccountIdInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountIdInput"></a>

```typescript
public readonly billingAccountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `exportDatasetNameInput`<sup>Optional</sup> <a name="exportDatasetNameInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetNameInput"></a>

```typescript
public readonly exportDatasetNameInput: string;
```

- *Type:* string

---

##### `exportPrefixInput`<sup>Optional</sup> <a name="exportPrefixInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefixInput"></a>

```typescript
public readonly exportPrefixInput: string;
```

- *Type:* string

---

##### `exportProjectNameInput`<sup>Optional</sup> <a name="exportProjectNameInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectNameInput"></a>

```typescript
public readonly exportProjectNameInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.billingAccountId"></a>

```typescript
public readonly billingAccountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `exportDatasetName`<sup>Required</sup> <a name="exportDatasetName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportDatasetName"></a>

```typescript
public readonly exportDatasetName: string;
```

- *Type:* string

---

##### `exportPrefix`<sup>Required</sup> <a name="exportPrefix" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportPrefix"></a>

```typescript
public readonly exportPrefix: string;
```

- *Type:* string

---

##### `exportProjectName`<sup>Required</sup> <a name="exportProjectName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.exportProjectName"></a>

```typescript
public readonly exportProjectName: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpUcConfigConfig <a name="GcpUcConfigConfig" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.Initializer"></a>

```typescript
import { gcpUcConfig } from '@cdktf/provider-datadog'

const gcpUcConfigConfig: gcpUcConfig.GcpUcConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.billingAccountId">billingAccountId</a></code> | <code>string</code> | The Google Cloud account ID. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.bucketName">bucketName</a></code> | <code>string</code> | The Google Cloud bucket name used to store the Usage Cost export. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportDatasetName">exportDatasetName</a></code> | <code>string</code> | The export dataset name used for the Google Cloud Usage Cost report. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportProjectName">exportProjectName</a></code> | <code>string</code> | The name of the Google Cloud Usage Cost report. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The unique Google Cloud service account email. |
| <code><a href="#@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportPrefix">exportPrefix</a></code> | <code>string</code> | The export prefix used for the Google Cloud Usage Cost report. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.billingAccountId"></a>

```typescript
public readonly billingAccountId: string;
```

- *Type:* string

The Google Cloud account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#billing_account_id GcpUcConfig#billing_account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The Google Cloud bucket name used to store the Usage Cost export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#bucket_name GcpUcConfig#bucket_name}

---

##### `exportDatasetName`<sup>Required</sup> <a name="exportDatasetName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportDatasetName"></a>

```typescript
public readonly exportDatasetName: string;
```

- *Type:* string

The export dataset name used for the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#export_dataset_name GcpUcConfig#export_dataset_name}

---

##### `exportProjectName`<sup>Required</sup> <a name="exportProjectName" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportProjectName"></a>

```typescript
public readonly exportProjectName: string;
```

- *Type:* string

The name of the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#export_project_name GcpUcConfig#export_project_name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The unique Google Cloud service account email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#service_account GcpUcConfig#service_account}

---

##### `exportPrefix`<sup>Optional</sup> <a name="exportPrefix" id="@cdktf/provider-datadog.gcpUcConfig.GcpUcConfigConfig.property.exportPrefix"></a>

```typescript
public readonly exportPrefix: string;
```

- *Type:* string

The export prefix used for the Google Cloud Usage Cost report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/gcp_uc_config#export_prefix GcpUcConfig#export_prefix}

---



