# `logsIndex` Submodule <a name="`logsIndex` Submodule" id="@cdktf/provider-datadog.logsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsIndex <a name="LogsIndex" id="@cdktf/provider-datadog.logsIndex.LogsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index datadog_logs_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndex(scope: Construct, id: string, config: LogsIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig">LogsIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig">LogsIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset">putDailyLimitReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter">putExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimit">resetDailyLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitReset">resetDailyLimitReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitWarningThresholdPercentage">resetDailyLimitWarningThresholdPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDisableDailyLimit">resetDisableDailyLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetExclusionFilter">resetExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetFlexRetentionDays">resetFlexRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.logsIndex.LogsIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDailyLimitReset` <a name="putDailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset"></a>

```typescript
public putDailyLimitReset(value: LogsIndexDailyLimitReset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

---

##### `putExclusionFilter` <a name="putExclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter"></a>

```typescript
public putExclusionFilter(value: IResolvable | LogsIndexExclusionFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter"></a>

```typescript
public putFilter(value: LogsIndexFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

---

##### `resetDailyLimit` <a name="resetDailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimit"></a>

```typescript
public resetDailyLimit(): void
```

##### `resetDailyLimitReset` <a name="resetDailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitReset"></a>

```typescript
public resetDailyLimitReset(): void
```

##### `resetDailyLimitWarningThresholdPercentage` <a name="resetDailyLimitWarningThresholdPercentage" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitWarningThresholdPercentage"></a>

```typescript
public resetDailyLimitWarningThresholdPercentage(): void
```

##### `resetDisableDailyLimit` <a name="resetDisableDailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDisableDailyLimit"></a>

```typescript
public resetDisableDailyLimit(): void
```

##### `resetExclusionFilter` <a name="resetExclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetExclusionFilter"></a>

```typescript
public resetExclusionFilter(): void
```

##### `resetFlexRetentionDays` <a name="resetFlexRetentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetFlexRetentionDays"></a>

```typescript
public resetFlexRetentionDays(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogsIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

logsIndex.LogsIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

logsIndex.LogsIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

logsIndex.LogsIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

logsIndex.LogsIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogsIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitReset">dailyLimitReset</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference">LogsIndexDailyLimitResetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilter">exclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList">LogsIndexExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference">LogsIndexFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitInput">dailyLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitResetInput">dailyLimitResetInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentageInput">dailyLimitWarningThresholdPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimitInput">disableDailyLimitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilterInput">exclusionFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDaysInput">flexRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentage">dailyLimitWarningThresholdPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimit">disableDailyLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDays">flexRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dailyLimitReset`<sup>Required</sup> <a name="dailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitReset"></a>

```typescript
public readonly dailyLimitReset: LogsIndexDailyLimitResetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference">LogsIndexDailyLimitResetOutputReference</a>

---

##### `exclusionFilter`<sup>Required</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: LogsIndexExclusionFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList">LogsIndexExclusionFilterList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.filter"></a>

```typescript
public readonly filter: LogsIndexFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference">LogsIndexFilterOutputReference</a>

---

##### `dailyLimitInput`<sup>Optional</sup> <a name="dailyLimitInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitInput"></a>

```typescript
public readonly dailyLimitInput: number;
```

- *Type:* number

---

##### `dailyLimitResetInput`<sup>Optional</sup> <a name="dailyLimitResetInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitResetInput"></a>

```typescript
public readonly dailyLimitResetInput: LogsIndexDailyLimitReset;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

---

##### `dailyLimitWarningThresholdPercentageInput`<sup>Optional</sup> <a name="dailyLimitWarningThresholdPercentageInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentageInput"></a>

```typescript
public readonly dailyLimitWarningThresholdPercentageInput: number;
```

- *Type:* number

---

##### `disableDailyLimitInput`<sup>Optional</sup> <a name="disableDailyLimitInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimitInput"></a>

```typescript
public readonly disableDailyLimitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclusionFilterInput`<sup>Optional</sup> <a name="exclusionFilterInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilterInput"></a>

```typescript
public readonly exclusionFilterInput: IResolvable | LogsIndexExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.filterInput"></a>

```typescript
public readonly filterInput: LogsIndexFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

---

##### `flexRetentionDaysInput`<sup>Optional</sup> <a name="flexRetentionDaysInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDaysInput"></a>

```typescript
public readonly flexRetentionDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `dailyLimit`<sup>Required</sup> <a name="dailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

---

##### `dailyLimitWarningThresholdPercentage`<sup>Required</sup> <a name="dailyLimitWarningThresholdPercentage" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentage"></a>

```typescript
public readonly dailyLimitWarningThresholdPercentage: number;
```

- *Type:* number

---

##### `disableDailyLimit`<sup>Required</sup> <a name="disableDailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimit"></a>

```typescript
public readonly disableDailyLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flexRetentionDays`<sup>Required</sup> <a name="flexRetentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDays"></a>

```typescript
public readonly flexRetentionDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsIndexConfig <a name="LogsIndexConfig" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

const logsIndexConfig: logsIndex.LogsIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.name">name</a></code> | <code>string</code> | The name of the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | The number of log events you can send in this index per day before you are rate-limited. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitReset">dailyLimitReset</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | daily_limit_reset block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitWarningThresholdPercentage">dailyLimitWarningThresholdPercentage</a></code> | <code>number</code> | A percentage threshold of the daily quota at which a Datadog warning event is generated. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.disableDailyLimit">disableDailyLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored). |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.exclusionFilter">exclusionFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]</code> | exclusion_filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.flexRetentionDays">flexRetentionDays</a></code> | <code>number</code> | The total number of days logs are stored in Standard and Flex Tier before being deleted from the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#id LogsIndex#id}. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.filter"></a>

```typescript
public readonly filter: LogsIndexFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#filter LogsIndex#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the index.

Index names cannot be modified after creation. If this value is changed, a new index will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#name LogsIndex#name}

---

##### `dailyLimit`<sup>Optional</sup> <a name="dailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

The number of log events you can send in this index per day before you are rate-limited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#daily_limit LogsIndex#daily_limit}

---

##### `dailyLimitReset`<sup>Optional</sup> <a name="dailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitReset"></a>

```typescript
public readonly dailyLimitReset: LogsIndexDailyLimitReset;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

daily_limit_reset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#daily_limit_reset LogsIndex#daily_limit_reset}

---

##### `dailyLimitWarningThresholdPercentage`<sup>Optional</sup> <a name="dailyLimitWarningThresholdPercentage" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitWarningThresholdPercentage"></a>

```typescript
public readonly dailyLimitWarningThresholdPercentage: number;
```

- *Type:* number

A percentage threshold of the daily quota at which a Datadog warning event is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#daily_limit_warning_threshold_percentage LogsIndex#daily_limit_warning_threshold_percentage}

---

##### `disableDailyLimit`<sup>Optional</sup> <a name="disableDailyLimit" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.disableDailyLimit"></a>

```typescript
public readonly disableDailyLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored).

If false or omitted, the index's current daily_limit is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#disable_daily_limit LogsIndex#disable_daily_limit}

---

##### `exclusionFilter`<sup>Optional</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: IResolvable | LogsIndexExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]

exclusion_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#exclusion_filter LogsIndex#exclusion_filter}

---

##### `flexRetentionDays`<sup>Optional</sup> <a name="flexRetentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.flexRetentionDays"></a>

```typescript
public readonly flexRetentionDays: number;
```

- *Type:* number

The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#flex_retention_days LogsIndex#flex_retention_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#id LogsIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#retention_days LogsIndex#retention_days}

---

### LogsIndexDailyLimitReset <a name="LogsIndexDailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

const logsIndexDailyLimitReset: logsIndex.LogsIndexDailyLimitReset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetTime">resetTime</a></code> | <code>string</code> | String in `HH:00` format representing the time of day the daily limit should be reset. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetUtcOffset">resetUtcOffset</a></code> | <code>string</code> | String in `(-\|+)HH:00` format representing the UTC offset to apply to the given reset time. |

---

##### `resetTime`<sup>Required</sup> <a name="resetTime" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetTime"></a>

```typescript
public readonly resetTime: string;
```

- *Type:* string

String in `HH:00` format representing the time of day the daily limit should be reset.

The hours must be between 00 and 23 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#reset_time LogsIndex#reset_time}

---

##### `resetUtcOffset`<sup>Required</sup> <a name="resetUtcOffset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetUtcOffset"></a>

```typescript
public readonly resetUtcOffset: string;
```

- *Type:* string

String in `(-|+)HH:00` format representing the UTC offset to apply to the given reset time.

The hours must be between -12 and +14 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#reset_utc_offset LogsIndex#reset_utc_offset}

---

### LogsIndexExclusionFilter <a name="LogsIndexExclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

const logsIndexExclusionFilter: logsIndex.LogsIndexExclusionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean stating if the exclusion is active or not. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.name">name</a></code> | <code>string</code> | The name of the exclusion filter. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.filter"></a>

```typescript
public readonly filter: IResolvable | LogsIndexExclusionFilterFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#filter LogsIndex#filter}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean stating if the exclusion is active or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#is_enabled LogsIndex#is_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#name LogsIndex#name}

---

### LogsIndexExclusionFilterFilter <a name="LogsIndexExclusionFilterFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

const logsIndexExclusionFilterFilter: logsIndex.LogsIndexExclusionFilterFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.query">query</a></code> | <code>string</code> | Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.sampleRate">sampleRate</a></code> | <code>number</code> | The fraction of logs excluded by the exclusion filter, when active. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#query LogsIndex#query}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

The fraction of logs excluded by the exclusion filter, when active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#sample_rate LogsIndex#sample_rate}

---

### LogsIndexFilter <a name="LogsIndexFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

const logsIndexFilter: logsIndex.LogsIndexFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter.property.query">query</a></code> | <code>string</code> | Logs filter criteria. Only logs matching this filter criteria are considered for this index. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Logs filter criteria. Only logs matching this filter criteria are considered for this index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/logs_index#query LogsIndex#query}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsIndexDailyLimitResetOutputReference <a name="LogsIndexDailyLimitResetOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexDailyLimitResetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTimeInput">resetTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffsetInput">resetUtcOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTime">resetTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffset">resetUtcOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resetTimeInput`<sup>Optional</sup> <a name="resetTimeInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTimeInput"></a>

```typescript
public readonly resetTimeInput: string;
```

- *Type:* string

---

##### `resetUtcOffsetInput`<sup>Optional</sup> <a name="resetUtcOffsetInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffsetInput"></a>

```typescript
public readonly resetUtcOffsetInput: string;
```

- *Type:* string

---

##### `resetTime`<sup>Required</sup> <a name="resetTime" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTime"></a>

```typescript
public readonly resetTime: string;
```

- *Type:* string

---

##### `resetUtcOffset`<sup>Required</sup> <a name="resetUtcOffset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffset"></a>

```typescript
public readonly resetUtcOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogsIndexDailyLimitReset;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

---


### LogsIndexExclusionFilterFilterList <a name="LogsIndexExclusionFilterFilterList" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexExclusionFilterFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get"></a>

```typescript
public get(index: number): LogsIndexExclusionFilterFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIndexExclusionFilterFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]

---


### LogsIndexExclusionFilterFilterOutputReference <a name="LogsIndexExclusionFilterFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexExclusionFilterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIndexExclusionFilterFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>

---


### LogsIndexExclusionFilterList <a name="LogsIndexExclusionFilterList" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexExclusionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get"></a>

```typescript
public get(index: number): LogsIndexExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIndexExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>[]

---


### LogsIndexExclusionFilterOutputReference <a name="LogsIndexExclusionFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexExclusionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | LogsIndexExclusionFilterFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList">LogsIndexExclusionFilterFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: LogsIndexExclusionFilterFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList">LogsIndexExclusionFilterFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | LogsIndexExclusionFilterFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>[]

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIndexExclusionFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>

---


### LogsIndexFilterOutputReference <a name="LogsIndexFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer"></a>

```typescript
import { logsIndex } from '@cdktf/provider-datadog'

new logsIndex.LogsIndexFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogsIndexFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

---



