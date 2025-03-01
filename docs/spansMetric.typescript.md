# `spansMetric` Submodule <a name="`spansMetric` Submodule" id="@cdktf/provider-datadog.spansMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpansMetric <a name="SpansMetric" id="@cdktf/provider-datadog.spansMetric.SpansMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric datadog_spans_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

new spansMetric.SpansMetric(scope: Construct, id: string, config: SpansMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig">SpansMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.spansMetric.SpansMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig">SpansMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.resetGroupBy">resetGroupBy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.spansMetric.SpansMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.spansMetric.SpansMetric.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute"></a>

```typescript
public putCompute(value: SpansMetricCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter"></a>

```typescript
public putFilter(value: SpansMetricFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy"></a>

```typescript
public putGroupBy(value: IResolvable | SpansMetricGroupBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.spansMetric.SpansMetric.putGroupBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]

---

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpansMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

spansMetric.SpansMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

spansMetric.SpansMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

spansMetric.SpansMetric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.spansMetric.SpansMetric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

spansMetric.SpansMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpansMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpansMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpansMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpansMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference">SpansMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference">SpansMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupBy">groupBy</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList">SpansMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.computeInput">computeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupByInput">groupByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.compute"></a>

```typescript
public readonly compute: SpansMetricComputeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference">SpansMetricComputeOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.filter"></a>

```typescript
public readonly filter: SpansMetricFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference">SpansMetricFilterOutputReference</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupBy"></a>

```typescript
public readonly groupBy: SpansMetricGroupByList;
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList">SpansMetricGroupByList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.computeInput"></a>

```typescript
public readonly computeInput: IResolvable | SpansMetricCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SpansMetricFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.groupByInput"></a>

```typescript
public readonly groupByInput: IResolvable | SpansMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.spansMetric.SpansMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpansMetricCompute <a name="SpansMetricCompute" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

const spansMetricCompute: spansMetric.SpansMetricCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.aggregationType">aggregationType</a></code> | <code>string</code> | The type of aggregation to use. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.includePercentiles">includePercentiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle to include or exclude percentile aggregations for distribution metrics. Only present when the `aggregation_type` is `distribution`. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.path">path</a></code> | <code>string</code> | The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution"). |

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

The type of aggregation to use. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#aggregation_type SpansMetric#aggregation_type}

---

##### `includePercentiles`<sup>Optional</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.includePercentiles"></a>

```typescript
public readonly includePercentiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle to include or exclude percentile aggregations for distribution metrics. Only present when the `aggregation_type` is `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#include_percentiles SpansMetric#include_percentiles}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.spansMetric.SpansMetricCompute.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution").

This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#path SpansMetric#path}

---

### SpansMetricConfig <a name="SpansMetricConfig" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

const spansMetricConfig: spansMetric.SpansMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.name">name</a></code> | <code>string</code> | The name of the span-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.groupBy">groupBy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]</code> | group_by block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the span-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#name SpansMetric#name}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.compute"></a>

```typescript
public readonly compute: SpansMetricCompute;
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#compute SpansMetric#compute}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.filter"></a>

```typescript
public readonly filter: SpansMetricFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#filter SpansMetric#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetricConfig.property.groupBy"></a>

```typescript
public readonly groupBy: IResolvable | SpansMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#group_by SpansMetric#group_by}

---

### SpansMetricFilter <a name="SpansMetricFilter" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

const spansMetricFilter: spansMetric.SpansMetricFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter.property.query">query</a></code> | <code>string</code> | The search query - following the span search syntax. Defaults to `"*"`. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The search query - following the span search syntax. Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#query SpansMetric#query}

---

### SpansMetricGroupBy <a name="SpansMetricGroupBy" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

const spansMetricGroupBy: spansMetric.SpansMetricGroupBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.path">path</a></code> | <code>string</code> | The path to the value the span-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.tagName">tagName</a></code> | <code>string</code> | Eventual name of the tag that gets created. By default, the path attribute is used as the tag name. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the value the span-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#path SpansMetric#path}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/spans_metric#tag_name SpansMetric#tag_name}

---

## Classes <a name="Classes" id="Classes"></a>

### SpansMetricComputeOutputReference <a name="SpansMetricComputeOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

new spansMetric.SpansMetricComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetIncludePercentiles">resetIncludePercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePercentiles` <a name="resetIncludePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetIncludePercentiles"></a>

```typescript
public resetIncludePercentiles(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationTypeInput">aggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentilesInput">includePercentilesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationType">aggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentiles">includePercentiles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationTypeInput`<sup>Optional</sup> <a name="aggregationTypeInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationTypeInput"></a>

```typescript
public readonly aggregationTypeInput: string;
```

- *Type:* string

---

##### `includePercentilesInput`<sup>Optional</sup> <a name="includePercentilesInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentilesInput"></a>

```typescript
public readonly includePercentilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `aggregationType`<sup>Required</sup> <a name="aggregationType" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.aggregationType"></a>

```typescript
public readonly aggregationType: string;
```

- *Type:* string

---

##### `includePercentiles`<sup>Required</sup> <a name="includePercentiles" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.includePercentiles"></a>

```typescript
public readonly includePercentiles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpansMetricCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricCompute">SpansMetricCompute</a>

---


### SpansMetricFilterOutputReference <a name="SpansMetricFilterOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

new spansMetric.SpansMetricFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpansMetricFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricFilter">SpansMetricFilter</a>

---


### SpansMetricGroupByList <a name="SpansMetricGroupByList" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

new spansMetric.SpansMetricGroupByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get"></a>

```typescript
public get(index: number): SpansMetricGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpansMetricGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>[]

---


### SpansMetricGroupByOutputReference <a name="SpansMetricGroupByOutputReference" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer"></a>

```typescript
import { spansMetric } from '@cdktf/provider-datadog'

new spansMetric.SpansMetricGroupByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.resetTagName"></a>

```typescript
public resetTagName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagNameInput"></a>

```typescript
public readonly tagNameInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.spansMetric.SpansMetricGroupByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpansMetricGroupBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.spansMetric.SpansMetricGroupBy">SpansMetricGroupBy</a>

---



