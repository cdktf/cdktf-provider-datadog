# `onCallSchedule` Submodule <a name="`onCallSchedule` Submodule" id="@cdktf/provider-datadog.onCallSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallSchedule <a name="OnCallSchedule" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule datadog_on_call_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallSchedule(scope: Construct, id: string, config: OnCallScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig">OnCallScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig">OnCallScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer">putLayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetLayer">resetLayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLayer` <a name="putLayer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer"></a>

```typescript
public putLayer(value: IResolvable | OnCallScheduleLayer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]

---

##### `resetLayer` <a name="resetLayer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetLayer"></a>

```typescript
public resetLayer(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnCallSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

onCallSchedule.OnCallSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

onCallSchedule.OnCallSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

onCallSchedule.OnCallSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

onCallSchedule.OnCallSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OnCallSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnCallSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layer">layer</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList">OnCallScheduleLayerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layerInput">layerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layer`<sup>Required</sup> <a name="layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layer"></a>

```typescript
public readonly layer: OnCallScheduleLayerList;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList">OnCallScheduleLayerList</a>

---

##### `layerInput`<sup>Optional</sup> <a name="layerInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layerInput"></a>

```typescript
public readonly layerInput: IResolvable | OnCallScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallScheduleConfig <a name="OnCallScheduleConfig" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

const onCallScheduleConfig: onCallSchedule.OnCallScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.name">name</a></code> | <code>string</code> | A human-readable name for the new schedule. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone in which the schedule is defined. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.layer">layer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]</code> | layer block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.teams">teams</a></code> | <code>string[]</code> | A list of team ids associated with the schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the new schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#name OnCallSchedule#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone in which the schedule is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#time_zone OnCallSchedule#time_zone}

---

##### `layer`<sup>Optional</sup> <a name="layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.layer"></a>

```typescript
public readonly layer: IResolvable | OnCallScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]

layer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#layer OnCallSchedule#layer}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

A list of team ids associated with the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#teams OnCallSchedule#teams}

---

### OnCallScheduleLayer <a name="OnCallScheduleLayer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

const onCallScheduleLayer: onCallSchedule.OnCallScheduleLayer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | The date/time when this layer should become active (in ISO 8601). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.name">name</a></code> | <code>string</code> | The name of this layer. Should be unique within the schedule. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.rotationStart">rotationStart</a></code> | <code>string</code> | The date/time when the rotation for this layer starts (in ISO 8601). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.users">users</a></code> | <code>string[]</code> | List of user IDs for the layer. Can either be a valid user id or null. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.endDate">endDate</a></code> | <code>string</code> | The date/time after which this layer no longer applies (in ISO 8601). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.restriction">restriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]</code> | restriction block. |

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

The date/time when this layer should become active (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#effective_date OnCallSchedule#effective_date}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this layer. Should be unique within the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#name OnCallSchedule#name}

---

##### `rotationStart`<sup>Required</sup> <a name="rotationStart" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.rotationStart"></a>

```typescript
public readonly rotationStart: string;
```

- *Type:* string

The date/time when the rotation for this layer starts (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#rotation_start OnCallSchedule#rotation_start}

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

List of user IDs for the layer. Can either be a valid user id or null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#users OnCallSchedule#users}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

The date/time after which this layer no longer applies (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#end_date OnCallSchedule#end_date}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.interval"></a>

```typescript
public readonly interval: OnCallScheduleLayerInterval;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#interval OnCallSchedule#interval}

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.restriction"></a>

```typescript
public readonly restriction: IResolvable | OnCallScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#restriction OnCallSchedule#restriction}

---

### OnCallScheduleLayerInterval <a name="OnCallScheduleLayerInterval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

const onCallScheduleLayerInterval: onCallSchedule.OnCallScheduleLayerInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.days">days</a></code> | <code>number</code> | The number of full days in each rotation period. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.seconds">seconds</a></code> | <code>number</code> | For intervals that are not expressible in whole days, this will be added to `days`. Defaults to `0`. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

The number of full days in each rotation period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#days OnCallSchedule#days}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

For intervals that are not expressible in whole days, this will be added to `days`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#seconds OnCallSchedule#seconds}

---

### OnCallScheduleLayerRestriction <a name="OnCallScheduleLayerRestriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

const onCallScheduleLayerRestriction: onCallSchedule.OnCallScheduleLayerRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endDay">endDay</a></code> | <code>string</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endTime">endTime</a></code> | <code>string</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startDay">startDay</a></code> | <code>string</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startTime">startTime</a></code> | <code>string</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endDay"></a>

```typescript
public readonly endDay: string;
```

- *Type:* string

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#end_day OnCallSchedule#end_day}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#end_time OnCallSchedule#end_time}

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startDay"></a>

```typescript
public readonly startDay: string;
```

- *Type:* string

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#start_day OnCallSchedule#start_day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/on_call_schedule#start_time OnCallSchedule#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallScheduleLayerIntervalOutputReference <a name="OnCallScheduleLayerIntervalOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallScheduleLayerIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallScheduleLayerInterval;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>

---


### OnCallScheduleLayerList <a name="OnCallScheduleLayerList" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallScheduleLayerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get"></a>

```typescript
public get(index: number): OnCallScheduleLayerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallScheduleLayer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>[]

---


### OnCallScheduleLayerOutputReference <a name="OnCallScheduleLayerOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallScheduleLayerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction">putRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRestriction">resetRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterval` <a name="putInterval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval"></a>

```typescript
public putInterval(value: OnCallScheduleLayerInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>

---

##### `putRestriction` <a name="putRestriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction"></a>

```typescript
public putRestriction(value: IResolvable | OnCallScheduleLayerRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]

---

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRestriction` <a name="resetRestriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRestriction"></a>

```typescript
public resetRestriction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference">OnCallScheduleLayerIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList">OnCallScheduleLayerRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDateInput">effectiveDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.intervalInput">intervalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restrictionInput">restrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStartInput">rotationStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDate">effectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStart">rotationStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.interval"></a>

```typescript
public readonly interval: OnCallScheduleLayerIntervalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference">OnCallScheduleLayerIntervalOutputReference</a>

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restriction"></a>

```typescript
public readonly restriction: OnCallScheduleLayerRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList">OnCallScheduleLayerRestrictionList</a>

---

##### `effectiveDateInput`<sup>Optional</sup> <a name="effectiveDateInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDateInput"></a>

```typescript
public readonly effectiveDateInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: IResolvable | OnCallScheduleLayerInterval;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restrictionInput`<sup>Optional</sup> <a name="restrictionInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restrictionInput"></a>

```typescript
public readonly restrictionInput: IResolvable | OnCallScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]

---

##### `rotationStartInput`<sup>Optional</sup> <a name="rotationStartInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStartInput"></a>

```typescript
public readonly rotationStartInput: string;
```

- *Type:* string

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDate"></a>

```typescript
public readonly effectiveDate: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rotationStart`<sup>Required</sup> <a name="rotationStart" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStart"></a>

```typescript
public readonly rotationStart: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallScheduleLayer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>

---


### OnCallScheduleLayerRestrictionList <a name="OnCallScheduleLayerRestrictionList" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallScheduleLayerRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get"></a>

```typescript
public get(index: number): OnCallScheduleLayerRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallScheduleLayerRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>[]

---


### OnCallScheduleLayerRestrictionOutputReference <a name="OnCallScheduleLayerRestrictionOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer"></a>

```typescript
import { onCallSchedule } from '@cdktf/provider-datadog'

new onCallSchedule.OnCallScheduleLayerRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDayInput">endDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDayInput">startDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDay">endDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDay">startDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDayInput`<sup>Optional</sup> <a name="endDayInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDayInput"></a>

```typescript
public readonly endDayInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startDayInput`<sup>Optional</sup> <a name="startDayInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDayInput"></a>

```typescript
public readonly startDayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDay"></a>

```typescript
public readonly endDay: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDay"></a>

```typescript
public readonly startDay: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallScheduleLayerRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>

---



