# `costBudget` Submodule <a name="`costBudget` Submodule" id="@cdktf/provider-datadog.costBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostBudget <a name="CostBudget" id="@cdktf/provider-datadog.costBudget.CostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

new costBudget.CostBudget(scope: Construct, id: string, config: CostBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.costBudget.CostBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig">CostBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.costBudget.CostBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.costBudget.CostBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.costBudget.CostBudget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.costBudget.CostBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.costBudget.CostBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.costBudget.CostBudget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.costBudget.CostBudget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.costBudget.CostBudget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.costBudget.CostBudget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.costBudget.CostBudget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-datadog.costBudget.CostBudget.putEntries"></a>

```typescript
public putEntries(value: IResolvable | CostBudgetEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.costBudget.CostBudget.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-datadog.costBudget.CostBudget.resetEntries"></a>

```typescript
public resetEntries(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.costBudget.CostBudget.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CostBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.costBudget.CostBudget.isConstruct"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

costBudget.CostBudget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.costBudget.CostBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

costBudget.CostBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

costBudget.CostBudget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.costBudget.CostBudget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

costBudget.CostBudget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CostBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.totalAmount">totalAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.endMonthInput">endMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQueryInput">metricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.startMonthInput">startMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.endMonth">endMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.startMonth">startMonth</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.costBudget.CostBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.costBudget.CostBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.costBudget.CostBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.costBudget.CostBudget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.costBudget.CostBudget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.costBudget.CostBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.costBudget.CostBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.costBudget.CostBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.costBudget.CostBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.costBudget.CostBudget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-datadog.costBudget.CostBudget.property.entries"></a>

```typescript
public readonly entries: CostBudgetEntriesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a>

---

##### `totalAmount`<sup>Required</sup> <a name="totalAmount" id="@cdktf/provider-datadog.costBudget.CostBudget.property.totalAmount"></a>

```typescript
public readonly totalAmount: number;
```

- *Type:* number

---

##### `endMonthInput`<sup>Optional</sup> <a name="endMonthInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.endMonthInput"></a>

```typescript
public readonly endMonthInput: number;
```

- *Type:* number

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQueryInput"></a>

```typescript
public readonly metricsQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startMonthInput`<sup>Optional</sup> <a name="startMonthInput" id="@cdktf/provider-datadog.costBudget.CostBudget.property.startMonthInput"></a>

```typescript
public readonly startMonthInput: number;
```

- *Type:* number

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktf/provider-datadog.costBudget.CostBudget.property.endMonth"></a>

```typescript
public readonly endMonth: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.costBudget.CostBudget.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.costBudget.CostBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktf/provider-datadog.costBudget.CostBudget.property.startMonth"></a>

```typescript
public readonly startMonth: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.costBudget.CostBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostBudgetConfig <a name="CostBudgetConfig" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

const costBudgetConfig: costBudget.CostBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.endMonth">endMonth</a></code> | <code>number</code> | The month when the budget ends (YYYYMM). |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | The cost query used to track against the budget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.name">name</a></code> | <code>string</code> | The name of the budget. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.startMonth">startMonth</a></code> | <code>number</code> | The month when the budget starts (YYYYMM). |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | entries block. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.id">id</a></code> | <code>string</code> | The ID of the budget. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.endMonth"></a>

```typescript
public readonly endMonth: number;
```

- *Type:* number

The month when the budget ends (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#end_month CostBudget#end_month}

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

The cost query used to track against the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#name CostBudget#name}

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.startMonth"></a>

```typescript
public readonly startMonth: number;
```

- *Type:* number

The month when the budget starts (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#start_month CostBudget#start_month}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#entries CostBudget#entries}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.costBudget.CostBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#id CostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CostBudgetEntries <a name="CostBudgetEntries" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

const costBudgetEntries: costBudget.CostBudgetEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#amount CostBudget#amount}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.month">month</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#month CostBudget#month}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters">tagFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | tag_filters block. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#amount CostBudget#amount}.

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#month CostBudget#month}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetEntriesTagFilters <a name="CostBudgetEntriesTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

const costBudgetEntriesTagFilters: costBudget.CostBudgetEntriesTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}.

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostBudgetEntriesList <a name="CostBudgetEntriesList" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

new costBudget.CostBudgetEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get"></a>

```typescript
public get(index: number): CostBudgetEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>[]

---


### CostBudgetEntriesOutputReference <a name="CostBudgetEntriesOutputReference" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

new costBudget.CostBudgetEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | CostBudgetEntriesTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: CostBudgetEntriesTagFiltersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>

---


### CostBudgetEntriesTagFiltersList <a name="CostBudgetEntriesTagFiltersList" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

new costBudget.CostBudgetEntriesTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get"></a>

```typescript
public get(index: number): CostBudgetEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntriesTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>[]

---


### CostBudgetEntriesTagFiltersOutputReference <a name="CostBudgetEntriesTagFiltersOutputReference" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```typescript
import { costBudget } from '@cdktf/provider-datadog'

new costBudget.CostBudgetEntriesTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CostBudgetEntriesTagFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>

---



