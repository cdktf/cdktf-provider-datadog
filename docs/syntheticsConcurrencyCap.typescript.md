# `syntheticsConcurrencyCap` Submodule <a name="`syntheticsConcurrencyCap` Submodule" id="@cdktf/provider-datadog.syntheticsConcurrencyCap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsConcurrencyCap <a name="SyntheticsConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap datadog_synthetics_concurrency_cap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

new syntheticsConcurrencyCap.SyntheticsConcurrencyCap(scope: Construct, id: string, config: SyntheticsConcurrencyCapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsConcurrencyCap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsConcurrencyCap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsConcurrencyCap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput">onDemandConcurrencyCapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap">onDemandConcurrencyCap</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onDemandConcurrencyCapInput`<sup>Optional</sup> <a name="onDemandConcurrencyCapInput" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput"></a>

```typescript
public readonly onDemandConcurrencyCapInput: number;
```

- *Type:* number

---

##### `onDemandConcurrencyCap`<sup>Required</sup> <a name="onDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap"></a>

```typescript
public readonly onDemandConcurrencyCap: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsConcurrencyCapConfig <a name="SyntheticsConcurrencyCapConfig" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.Initializer"></a>

```typescript
import { syntheticsConcurrencyCap } from '@cdktf/provider-datadog'

const syntheticsConcurrencyCapConfig: syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap">onDemandConcurrencyCap</a></code> | <code>number</code> | Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onDemandConcurrencyCap`<sup>Required</sup> <a name="onDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap"></a>

```typescript
public readonly onDemandConcurrencyCap: number;
```

- *Type:* number

Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel.

Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap#on_demand_concurrency_cap SyntheticsConcurrencyCap#on_demand_concurrency_cap}

---



