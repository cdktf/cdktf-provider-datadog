# `rumMetric` Submodule <a name="`rumMetric` Submodule" id="@cdktf/provider-datadog.rumMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumMetric <a name="RumMetric" id="@cdktf/provider-datadog.rumMetric.RumMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric datadog_rum_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetric(scope: Construct, id: string, config: RumMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig">RumMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.rumMetric.RumMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig">RumMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness">putUniqueness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.resetUniqueness">resetUniqueness</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.rumMetric.RumMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.rumMetric.RumMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.rumMetric.RumMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.rumMetric.RumMetric.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-datadog.rumMetric.RumMetric.putCompute"></a>

```typescript
public putCompute(value: RumMetricCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.rumMetric.RumMetric.putFilter"></a>

```typescript
public putFilter(value: RumMetricFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy"></a>

```typescript
public putGroupBy(value: IResolvable | RumMetricGroupBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putGroupBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]

---

##### `putUniqueness` <a name="putUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness"></a>

```typescript
public putUniqueness(value: RumMetricUniqueness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.rumMetric.RumMetric.putUniqueness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetUniqueness` <a name="resetUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.resetUniqueness"></a>

```typescript
public resetUniqueness(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RumMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

rumMetric.RumMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

rumMetric.RumMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

rumMetric.RumMetric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.rumMetric.RumMetric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

rumMetric.RumMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RumMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RumMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RumMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RumMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference">RumMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference">RumMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.groupBy">groupBy</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList">RumMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.uniqueness">uniqueness</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference">RumMetricUniquenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.computeInput">computeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.groupByInput">groupByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.uniquenessInput">uniquenessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.compute"></a>

```typescript
public readonly compute: RumMetricComputeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference">RumMetricComputeOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.filter"></a>

```typescript
public readonly filter: RumMetricFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference">RumMetricFilterOutputReference</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.groupBy"></a>

```typescript
public readonly groupBy: RumMetricGroupByList;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList">RumMetricGroupByList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `uniqueness`<sup>Required</sup> <a name="uniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.uniqueness"></a>

```typescript
public readonly uniqueness: RumMetricUniquenessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference">RumMetricUniquenessOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.computeInput"></a>

```typescript
public readonly computeInput: IResolvable | RumMetricCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | RumMetricFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.groupByInput"></a>

```typescript
public readonly groupByInput: IResolvable | RumMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `uniquenessInput`<sup>Optional</sup> <a name="uniquenessInput" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.uniquenessInput"></a>

```typescript
public readonly uniquenessInput: IResolvable | RumMetricUniqueness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.rumMetric.RumMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumMetricCompute <a name="RumMetricCompute" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

const rumMetricCompute: rumMetric.RumMetricCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.aggregationType">aggregationType</a></code> | <code>string</code> | The type of aggregation to use. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.includePercentiles">includePercentiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle to include or exclude percentile aggregations for distribution metrics. Only present when `aggregation_type` is `distribution`. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.path">path</a></code> | <code>string</code> | The path to the value the RUM-based metric will aggregate on. Only present when `aggregation_type` is `distribution`. |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

The type of aggregation to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#aggregation_type RumMetric#aggregation_type}

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.includePercentiles"></a>

```typescript
public readonly includePercentiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle to include or exclude percentile aggregations for distribution metrics. Only present when `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#include_percentiles RumMetric#include_percentiles}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricCompute.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the value the RUM-based metric will aggregate on. Only present when `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#path RumMetric#path}

---

### RumMetricConfig <a name="RumMetricConfig" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

const rumMetricConfig: rumMetric.RumMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.eventType">eventType</a></code> | <code>string</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.name">name</a></code> | <code>string</code> | The name of the RUM-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.groupBy">groupBy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.uniqueness">uniqueness</a></code> | <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | uniqueness block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#event_type RumMetric#event_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the RUM-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#name RumMetric#name}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.compute"></a>

```typescript
public readonly compute: RumMetricCompute;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#compute RumMetric#compute}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.filter"></a>

```typescript
public readonly filter: RumMetricFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#filter RumMetric#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.groupBy"></a>

```typescript
public readonly groupBy: IResolvable | RumMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#group_by RumMetric#group_by}

---

##### `uniqueness`<sup>Optional</sup> <a name="uniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetricConfig.property.uniqueness"></a>

```typescript
public readonly uniqueness: RumMetricUniqueness;
```

- *Type:* <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

uniqueness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#uniqueness RumMetric#uniqueness}

---

### RumMetricFilter <a name="RumMetricFilter" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

const rumMetricFilter: rumMetric.RumMetricFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter.property.query">query</a></code> | <code>string</code> | The search query. Follows RUM search syntax. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.rumMetric.RumMetricFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The search query. Follows RUM search syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#query RumMetric#query}

---

### RumMetricGroupBy <a name="RumMetricGroupBy" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

const rumMetricGroupBy: rumMetric.RumMetricGroupBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.path">path</a></code> | <code>string</code> | The path to the value the RUM-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.tagName">tagName</a></code> | <code>string</code> | Name of the tag that gets created. By default, `path` is used as the tag name. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the value the RUM-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#path RumMetric#path}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupBy.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

Name of the tag that gets created. By default, `path` is used as the tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#tag_name RumMetric#tag_name}

---

### RumMetricUniqueness <a name="RumMetricUniqueness" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

const rumMetricUniqueness: rumMetric.RumMetricUniqueness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.property.when">when</a></code> | <code>string</code> | When to count updatable events. `match` when the event is first seen, or `end` when the event is complete. |

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-datadog.rumMetric.RumMetricUniqueness.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

When to count updatable events. `match` when the event is first seen, or `end` when the event is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/resources/rum_metric#when RumMetric#when}

---

## Classes <a name="Classes" id="Classes"></a>

### RumMetricComputeOutputReference <a name="RumMetricComputeOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetricComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetIncludePercentiles">resetIncludePercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePercentiles` <a name="resetIncludePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetIncludePercentiles"></a>

```typescript
public resetIncludePercentiles(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentilesInput">includePercentilesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationType">aggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentiles">includePercentiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationTypeInput"></a>

```typescript
public readonly aggregationTypeInput: string;
```

- *Type:* string

---

##### `includePercentilesInput`<sup>Optional</sup> <a name="includePercentilesInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentilesInput"></a>

```typescript
public readonly includePercentilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

---

##### `includePercentiles`<sup>Required</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.includePercentiles"></a>

```typescript
public readonly includePercentiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumMetricCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricCompute">RumMetricCompute</a>

---


### RumMetricFilterOutputReference <a name="RumMetricFilterOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetricFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumMetricFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricFilter">RumMetricFilter</a>

---


### RumMetricGroupByList <a name="RumMetricGroupByList" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetricGroupByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get"></a>

```typescript
public get(index: number): RumMetricGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>[]

---


### RumMetricGroupByOutputReference <a name="RumMetricGroupByOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetricGroupByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.resetTagName"></a>

```typescript
public resetTagName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagNameInput"></a>

```typescript
public readonly tagNameInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricGroupByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumMetricGroupBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricGroupBy">RumMetricGroupBy</a>

---


### RumMetricUniquenessOutputReference <a name="RumMetricUniquenessOutputReference" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer"></a>

```typescript
import { rumMetric } from '@cdktf/provider-datadog'

new rumMetric.RumMetricUniquenessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resetWhen">resetWhen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWhen` <a name="resetWhen" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.resetWhen"></a>

```typescript
public resetWhen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.whenInput">whenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whenInput`<sup>Optional</sup> <a name="whenInput" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.whenInput"></a>

```typescript
public readonly whenInput: string;
```

- *Type:* string

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.rumMetric.RumMetricUniquenessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RumMetricUniqueness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.rumMetric.RumMetricUniqueness">RumMetricUniqueness</a>

---



