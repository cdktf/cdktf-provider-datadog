# `customAllocationRule` Submodule <a name="`customAllocationRule` Submodule" id="@cdktf/provider-datadog.customAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAllocationRule <a name="CustomAllocationRule" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRule(scope: Construct, id: string, config: CustomAllocationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate">putCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate">resetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCostsToAllocate` <a name="putCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate"></a>

```typescript
public putCostsToAllocate(value: IResolvable | CustomAllocationRuleCostsToAllocate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy"></a>

```typescript
public putStrategy(value: CustomAllocationRuleStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `resetCostsToAllocate` <a name="resetCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate"></a>

```typescript
public resetCostsToAllocate(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

customAllocationRule.CustomAllocationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

customAllocationRule.CustomAllocationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

customAllocationRule.CustomAllocationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

customAllocationRule.CustomAllocationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomAllocationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate">costsToAllocate</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid">lastModifiedUserUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId">orderId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected">rejected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput">costsToAllocateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput">providernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput">strategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames">providernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `costsToAllocate`<sup>Required</sup> <a name="costsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate"></a>

```typescript
public readonly costsToAllocate: CustomAllocationRuleCostsToAllocateList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedUserUuid`<sup>Required</sup> <a name="lastModifiedUserUuid" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid"></a>

```typescript
public readonly lastModifiedUserUuid: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

---

##### `rejected`<sup>Required</sup> <a name="rejected" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected"></a>

```typescript
public readonly rejected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy"></a>

```typescript
public readonly strategy: CustomAllocationRuleStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `costsToAllocateInput`<sup>Optional</sup> <a name="costsToAllocateInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput"></a>

```typescript
public readonly costsToAllocateInput: IResolvable | CustomAllocationRuleCostsToAllocate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providernamesInput`<sup>Optional</sup> <a name="providernamesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput"></a>

```typescript
public readonly providernamesInput: string[];
```

- *Type:* string[]

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput"></a>

```typescript
public readonly strategyInput: IResolvable | CustomAllocationRuleStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames"></a>

```typescript
public readonly providernames: string[];
```

- *Type:* string[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAllocationRuleConfig <a name="CustomAllocationRuleConfig" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleConfig: customAllocationRule.CustomAllocationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the custom allocation rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames">providernames</a></code> | <code>string[]</code> | List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the custom allocation rule. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate">costsToAllocate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the custom allocation rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames"></a>

```typescript
public readonly providernames: string[];
```

- *Type:* string[]

List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the custom allocation rule.

This field is immutable - changing it will force replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}

---

##### `costsToAllocate`<sup>Optional</sup> <a name="costsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate"></a>

```typescript
public readonly costsToAllocate: IResolvable | CustomAllocationRuleCostsToAllocate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy"></a>

```typescript
public readonly strategy: CustomAllocationRuleStrategy;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}

---

### CustomAllocationRuleCostsToAllocate <a name="CustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleCostsToAllocate: customAllocationRule.CustomAllocationRuleCostsToAllocate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition">condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag">tag</a></code> | <code>string</code> | The tag key to filter on (e.g., `aws_product`, `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value">value</a></code> | <code>string</code> | The single tag value to match. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values">values</a></code> | <code>string[]</code> | A list of tag values to match. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag key to filter on (e.g., `aws_product`, `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The single tag value to match.

Use this field for conditions like `=`, `!=`, `is`, `is not`, `like`. Do not use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of tag values to match.

Use this field for `in` or `not in` conditions only. Do not use with single-value conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategy <a name="CustomAllocationRuleStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategy: customAllocationRule.CustomAllocationRuleStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy">allocatedBy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters">allocatedByFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys">allocatedByTagKeys</a></code> | <code>string[]</code> | List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts">basedOnCosts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries">basedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters">evaluateGroupedByFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | evaluate_grouped_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys">evaluateGroupedByTagKeys</a></code> | <code>string[]</code> | List of tag keys used to group costs before allocation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity">granularity</a></code> | <code>string</code> | The granularity level for cost allocation. Valid values are `daily` or `monthly`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method">method</a></code> | <code>string</code> | The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`. |

---

##### `allocatedBy`<sup>Optional</sup> <a name="allocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy"></a>

```typescript
public readonly allocatedBy: IResolvable | CustomAllocationRuleStrategyAllocatedBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}

---

##### `allocatedByFilters`<sup>Optional</sup> <a name="allocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```typescript
public readonly allocatedByFilters: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}

---

##### `allocatedByTagKeys`<sup>Optional</sup> <a name="allocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys"></a>

```typescript
public readonly allocatedByTagKeys: string[];
```

- *Type:* string[]

List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}

---

##### `basedOnCosts`<sup>Optional</sup> <a name="basedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts"></a>

```typescript
public readonly basedOnCosts: IResolvable | CustomAllocationRuleStrategyBasedOnCosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}

---

##### `basedOnTimeseries`<sup>Optional</sup> <a name="basedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```typescript
public readonly basedOnTimeseries: CustomAllocationRuleStrategyBasedOnTimeseries;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}

---

##### `evaluateGroupedByFilters`<sup>Optional</sup> <a name="evaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```typescript
public readonly evaluateGroupedByFilters: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}

---

##### `evaluateGroupedByTagKeys`<sup>Optional</sup> <a name="evaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys"></a>

```typescript
public readonly evaluateGroupedByTagKeys: string[];
```

- *Type:* string[]

List of tag keys used to group costs before allocation.

Costs are grouped by these tag values before applying the allocation strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

The granularity level for cost allocation. Valid values are `daily` or `monthly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}

---

### CustomAllocationRuleStrategyAllocatedBy <a name="CustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyAllocatedBy: customAllocationRule.CustomAllocationRuleStrategyAllocatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">allocatedTags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | allocated_tags block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage">percentage</a></code> | <code>number</code> | The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`. |

---

##### `allocatedTags`<sup>Optional</sup> <a name="allocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```typescript
public readonly allocatedTags: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_tags CustomAllocationRule#allocated_tags}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#percentage CustomAllocationRule#percentage}

---

### CustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyAllocatedByAllocatedTags: customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key">key</a></code> | <code>string</code> | The tag key to allocate costs to (e.g., `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value">value</a></code> | <code>string</code> | The tag value to allocate costs to (e.g., `backend`, `production`). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key to allocate costs to (e.g., `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#key CustomAllocationRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value to allocate costs to (e.g., `backend`, `production`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

### CustomAllocationRuleStrategyAllocatedByFilters <a name="CustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyAllocatedByFilters: customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition">condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag">tag</a></code> | <code>string</code> | The tag key to filter on for allocation targets. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value">value</a></code> | <code>string</code> | The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values">values</a></code> | <code>string[]</code> | A list of tag values to match for allocation. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag key to filter on for allocation targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of tag values to match for allocation. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnCosts <a name="CustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyBasedOnCosts: customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition">condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag">tag</a></code> | <code>string</code> | The tag key to use as the basis for cost allocation calculations. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value">value</a></code> | <code>string</code> | The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values">values</a></code> | <code>string[]</code> | A list of tag values to use for cost calculations. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag key to use as the basis for cost allocation calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of tag values to use for cost calculations. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnTimeseries <a name="CustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyBasedOnTimeseries: customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries = { ... }
```


### CustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="CustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

const customAllocationRuleStrategyEvaluateGroupedByFilters: customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition">condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag">tag</a></code> | <code>string</code> | The tag key to filter on when grouping costs for evaluation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value">value</a></code> | <code>string</code> | The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values">values</a></code> | <code>string[]</code> | A list of tag values to match when grouping. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag key to filter on when grouping costs for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of tag values to match when grouping. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAllocationRuleCostsToAllocateList <a name="CustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleCostsToAllocateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleCostsToAllocateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleCostsToAllocate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---


### CustomAllocationRuleCostsToAllocateOutputReference <a name="CustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleCostsToAllocate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### CustomAllocationRuleStrategyAllocatedByFiltersList <a name="CustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---


### CustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="CustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>

---


### CustomAllocationRuleStrategyAllocatedByList <a name="CustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleStrategyAllocatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---


### CustomAllocationRuleStrategyAllocatedByOutputReference <a name="CustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">putAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">resetAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllocatedTags` <a name="putAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```typescript
public putAllocatedTags(value: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `resetAllocatedTags` <a name="resetAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```typescript
public resetAllocatedTags(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">allocatedTags</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">allocatedTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedTags`<sup>Required</sup> <a name="allocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```typescript
public readonly allocatedTags: CustomAllocationRuleStrategyAllocatedByAllocatedTagsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `allocatedTagsInput`<sup>Optional</sup> <a name="allocatedTagsInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```typescript
public readonly allocatedTagsInput: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyAllocatedBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>

---


### CustomAllocationRuleStrategyBasedOnCostsList <a name="CustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleStrategyBasedOnCostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyBasedOnCosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---


### CustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="CustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyBasedOnCosts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>

---


### CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyBasedOnTimeseries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```typescript
public get(index: number): CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### CustomAllocationRuleStrategyOutputReference <a name="CustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer"></a>

```typescript
import { customAllocationRule } from '@cdktf/provider-datadog'

new customAllocationRule.CustomAllocationRuleStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy">putAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">putAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts">putBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">putBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">putEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy">resetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">resetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys">resetAllocatedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">resetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">resetEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys">resetEvaluateGroupedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod">resetMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllocatedBy` <a name="putAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```typescript
public putAllocatedBy(value: IResolvable | CustomAllocationRuleStrategyAllocatedBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `putAllocatedByFilters` <a name="putAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```typescript
public putAllocatedByFilters(value: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `putBasedOnCosts` <a name="putBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```typescript
public putBasedOnCosts(value: IResolvable | CustomAllocationRuleStrategyBasedOnCosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `putBasedOnTimeseries` <a name="putBasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```typescript
public putBasedOnTimeseries(value: CustomAllocationRuleStrategyBasedOnTimeseries): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `putEvaluateGroupedByFilters` <a name="putEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```typescript
public putEvaluateGroupedByFilters(value: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `resetAllocatedBy` <a name="resetAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```typescript
public resetAllocatedBy(): void
```

##### `resetAllocatedByFilters` <a name="resetAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```typescript
public resetAllocatedByFilters(): void
```

##### `resetAllocatedByTagKeys` <a name="resetAllocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys"></a>

```typescript
public resetAllocatedByTagKeys(): void
```

##### `resetBasedOnCosts` <a name="resetBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```typescript
public resetBasedOnCosts(): void
```

##### `resetEvaluateGroupedByFilters` <a name="resetEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```typescript
public resetEvaluateGroupedByFilters(): void
```

##### `resetEvaluateGroupedByTagKeys` <a name="resetEvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys"></a>

```typescript
public resetEvaluateGroupedByTagKeys(): void
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy">allocatedBy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">allocatedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts">basedOnCosts</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">basedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">evaluateGroupedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">allocatedByFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput">allocatedByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput">allocatedByTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">basedOnCostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">basedOnTimeseriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">evaluateGroupedByFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput">evaluateGroupedByTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">allocatedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">evaluateGroupedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedBy`<sup>Required</sup> <a name="allocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```typescript
public readonly allocatedBy: CustomAllocationRuleStrategyAllocatedByList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a>

---

##### `allocatedByFilters`<sup>Required</sup> <a name="allocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```typescript
public readonly allocatedByFilters: CustomAllocationRuleStrategyAllocatedByFiltersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `basedOnCosts`<sup>Required</sup> <a name="basedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```typescript
public readonly basedOnCosts: CustomAllocationRuleStrategyBasedOnCostsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `basedOnTimeseries`<sup>Required</sup> <a name="basedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```typescript
public readonly basedOnTimeseries: CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `evaluateGroupedByFilters`<sup>Required</sup> <a name="evaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```typescript
public readonly evaluateGroupedByFilters: CustomAllocationRuleStrategyEvaluateGroupedByFiltersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `allocatedByFiltersInput`<sup>Optional</sup> <a name="allocatedByFiltersInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```typescript
public readonly allocatedByFiltersInput: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `allocatedByInput`<sup>Optional</sup> <a name="allocatedByInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```typescript
public readonly allocatedByInput: IResolvable | CustomAllocationRuleStrategyAllocatedBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `allocatedByTagKeysInput`<sup>Optional</sup> <a name="allocatedByTagKeysInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput"></a>

```typescript
public readonly allocatedByTagKeysInput: string[];
```

- *Type:* string[]

---

##### `basedOnCostsInput`<sup>Optional</sup> <a name="basedOnCostsInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```typescript
public readonly basedOnCostsInput: IResolvable | CustomAllocationRuleStrategyBasedOnCosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `basedOnTimeseriesInput`<sup>Optional</sup> <a name="basedOnTimeseriesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```typescript
public readonly basedOnTimeseriesInput: IResolvable | CustomAllocationRuleStrategyBasedOnTimeseries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `evaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="evaluateGroupedByFiltersInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```typescript
public readonly evaluateGroupedByFiltersInput: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `evaluateGroupedByTagKeysInput`<sup>Optional</sup> <a name="evaluateGroupedByTagKeysInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput"></a>

```typescript
public readonly evaluateGroupedByTagKeysInput: string[];
```

- *Type:* string[]

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `allocatedByTagKeys`<sup>Required</sup> <a name="allocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```typescript
public readonly allocatedByTagKeys: string[];
```

- *Type:* string[]

---

##### `evaluateGroupedByTagKeys`<sup>Required</sup> <a name="evaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```typescript
public readonly evaluateGroupedByTagKeys: string[];
```

- *Type:* string[]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomAllocationRuleStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---



