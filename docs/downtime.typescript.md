# `downtime` Submodule <a name="`downtime` Submodule" id="@cdktf/provider-datadog.downtime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Downtime <a name="Downtime" id="@cdktf/provider-datadog.downtime.Downtime"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime datadog_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.Downtime.Initializer"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

new downtime.Downtime(scope: Construct, id: string, config: DowntimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorId">resetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags">resetMonitorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification">resetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtime.Downtime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.downtime.Downtime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.downtime.Downtime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.downtime.Downtime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.downtime.Downtime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.downtime.Downtime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.downtime.Downtime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence"></a>

```typescript
public putRecurrence(value: DowntimeRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-datadog.downtime.Downtime.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-datadog.downtime.Downtime.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.downtime.Downtime.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-datadog.downtime.Downtime.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetMonitorId` <a name="resetMonitorId" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorId"></a>

```typescript
public resetMonitorId(): void
```

##### `resetMonitorTags` <a name="resetMonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags"></a>

```typescript
public resetMonitorTags(): void
```

##### `resetMuteFirstRecoveryNotification` <a name="resetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification"></a>

```typescript
public resetMuteFirstRecoveryNotification(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-datadog.downtime.Downtime.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktf/provider-datadog.downtime.Downtime.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-datadog.downtime.Downtime.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

downtime.Downtime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

downtime.Downtime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

downtime.Downtime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

downtime.Downtime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Downtime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Downtime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Downtime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.activeChildId">activeChildId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput">monitorIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput">monitorTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput">muteFirstRecoveryNotificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scopeInput">scopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorId">monitorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTags">monitorTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.downtime.Downtime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.Downtime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.Downtime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.Downtime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtime.Downtime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtime.Downtime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.Downtime.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-datadog.downtime.Downtime.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `activeChildId`<sup>Required</sup> <a name="activeChildId" id="@cdktf/provider-datadog.downtime.Downtime.property.activeChildId"></a>

```typescript
public readonly activeChildId: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-datadog.downtime.Downtime.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrence"></a>

```typescript
public readonly recurrence: DowntimeRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.downtime.Downtime.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.downtime.Downtime.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: number;
```

- *Type:* number

---

##### `monitorTagsInput`<sup>Optional</sup> <a name="monitorTagsInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput"></a>

```typescript
public readonly monitorTagsInput: string[];
```

- *Type:* string[]

---

##### `muteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="muteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput"></a>

```typescript
public readonly muteFirstRecoveryNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: DowntimeRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.downtime.Downtime.property.scopeInput"></a>

```typescript
public readonly scopeInput: string[];
```

- *Type:* string[]

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.downtime.Downtime.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-datadog.downtime.Downtime.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.downtime.Downtime.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorId"></a>

```typescript
public readonly monitorId: number;
```

- *Type:* number

---

##### `monitorTags`<sup>Required</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTags"></a>

```typescript
public readonly monitorTags: string[];
```

- *Type:* string[]

---

##### `muteFirstRecoveryNotification`<sup>Required</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification"></a>

```typescript
public readonly muteFirstRecoveryNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtime.Downtime.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-datadog.downtime.Downtime.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.Downtime.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeConfig <a name="DowntimeConfig" id="@cdktf/provider-datadog.downtime.DowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeConfig.Initializer"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

const downtimeConfig: downtime.DowntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope">scope</a></code> | <code>string[]</code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.end">end</a></code> | <code>number</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate">endDate</a></code> | <code>string</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.message">message</a></code> | <code>string</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId">monitorId</a></code> | <code>number</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags">monitorTags</a></code> | <code>string[]</code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification">muteFirstRecoveryNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true the first recovery notification during the downtime will be muted Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.start">start</a></code> | <code>number</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate">startDate</a></code> | <code>string</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone">timezone</a></code> | <code>string</code> | The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#scope Downtime#scope}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#end Downtime#end}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#message Downtime#message}

---

##### `monitorId`<sup>Optional</sup> <a name="monitorId" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId"></a>

```typescript
public readonly monitorId: number;
```

- *Type:* number

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `monitorTags`<sup>Optional</sup> <a name="monitorTags" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags"></a>

```typescript
public readonly monitorTags: string[];
```

- *Type:* string[]

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `muteFirstRecoveryNotification`<sup>Optional</sup> <a name="muteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification"></a>

```typescript
public readonly muteFirstRecoveryNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true the first recovery notification during the downtime will be muted Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence"></a>

```typescript
public readonly recurrence: DowntimeRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#start Downtime#start}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#timezone Downtime#timezone}

---

### DowntimeRecurrence <a name="DowntimeRecurrence" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.Initializer"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

const downtimeRecurrence: downtime.DowntimeRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type">type</a></code> | <code>string</code> | One of `days`, `weeks`, `months`, `years`, or `rrule`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period">period</a></code> | <code>number</code> | How often to repeat as an integer. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule">rrule</a></code> | <code>string</code> | The RRULE standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate">untilDate</a></code> | <code>number</code> | The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences">untilOccurrences</a></code> | <code>number</code> | How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays">weekDays</a></code> | <code>string[]</code> | A list of week days to repeat on. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#type Downtime#type}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#period Downtime#period}

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#rrule Downtime#rrule}

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate"></a>

```typescript
public readonly untilDate: number;
```

- *Type:* number

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#until_date Downtime#until_date}

---

##### `untilOccurrences`<sup>Optional</sup> <a name="untilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences"></a>

```typescript
public readonly untilOccurrences: number;
```

- *Type:* number

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

##### `weekDays`<sup>Optional</sup> <a name="weekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays"></a>

```typescript
public readonly weekDays: string[];
```

- *Type:* string[]

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/downtime#week_days Downtime#week_days}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeRecurrenceOutputReference <a name="DowntimeRecurrenceOutputReference" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer"></a>

```typescript
import { downtime } from '@cdktf/provider-datadog'

new downtime.DowntimeRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule">resetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences">resetUntilOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays">resetWeekDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRrule` <a name="resetRrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule"></a>

```typescript
public resetRrule(): void
```

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate"></a>

```typescript
public resetUntilDate(): void
```

##### `resetUntilOccurrences` <a name="resetUntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences"></a>

```typescript
public resetUntilOccurrences(): void
```

##### `resetWeekDays` <a name="resetWeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays"></a>

```typescript
public resetWeekDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput">rruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput">untilOccurrencesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput">weekDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate">untilDate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences">untilOccurrences</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays">weekDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput"></a>

```typescript
public readonly rruleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput"></a>

```typescript
public readonly untilDateInput: number;
```

- *Type:* number

---

##### `untilOccurrencesInput`<sup>Optional</sup> <a name="untilOccurrencesInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput"></a>

```typescript
public readonly untilOccurrencesInput: number;
```

- *Type:* number

---

##### `weekDaysInput`<sup>Optional</sup> <a name="weekDaysInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput"></a>

```typescript
public readonly weekDaysInput: string[];
```

- *Type:* string[]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate"></a>

```typescript
public readonly untilDate: number;
```

- *Type:* number

---

##### `untilOccurrences`<sup>Required</sup> <a name="untilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences"></a>

```typescript
public readonly untilOccurrences: number;
```

- *Type:* number

---

##### `weekDays`<sup>Required</sup> <a name="weekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays"></a>

```typescript
public readonly weekDays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DowntimeRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---



