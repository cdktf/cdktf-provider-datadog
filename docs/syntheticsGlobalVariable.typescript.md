# `syntheticsGlobalVariable` Submodule <a name="`syntheticsGlobalVariable` Submodule" id="@cdktf/provider-datadog.syntheticsGlobalVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsGlobalVariable <a name="SyntheticsGlobalVariable" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariable(scope: Construct, id: string, config: SyntheticsGlobalVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig">SyntheticsGlobalVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig">SyntheticsGlobalVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions">putParseTestOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsFido">resetIsFido</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsTotp">resetIsTotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId">resetParseTestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions">resetParseTestOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles">resetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions"></a>

```typescript
public putOptions(value: IResolvable | SyntheticsGlobalVariableOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---

##### `putParseTestOptions` <a name="putParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions"></a>

```typescript
public putParseTestOptions(value: IResolvable | SyntheticsGlobalVariableParseTestOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsFido` <a name="resetIsFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsFido"></a>

```typescript
public resetIsFido(): void
```

##### `resetIsTotp` <a name="resetIsTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetIsTotp"></a>

```typescript
public resetIsTotp(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetParseTestId` <a name="resetParseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId"></a>

```typescript
public resetParseTestId(): void
```

##### `resetParseTestOptions` <a name="resetParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions"></a>

```typescript
public resetParseTestOptions(): void
```

##### `resetRestrictedRoles` <a name="resetRestrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles"></a>

```typescript
public resetRestrictedRoles(): void
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure"></a>

```typescript
public resetSecure(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsGlobalVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsGlobalVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsGlobalVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList">SyntheticsGlobalVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions">parseTestOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList">SyntheticsGlobalVariableParseTestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFidoInput">isFidoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotpInput">isTotpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput">optionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput">parseTestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput">parseTestOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput">restrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput">secureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFido">isFido</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotp">isTotp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId">parseTestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options"></a>

```typescript
public readonly options: SyntheticsGlobalVariableOptionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList">SyntheticsGlobalVariableOptionsList</a>

---

##### `parseTestOptions`<sup>Required</sup> <a name="parseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions"></a>

```typescript
public readonly parseTestOptions: SyntheticsGlobalVariableParseTestOptionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList">SyntheticsGlobalVariableParseTestOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isFidoInput`<sup>Optional</sup> <a name="isFidoInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFidoInput"></a>

```typescript
public readonly isFidoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTotpInput`<sup>Optional</sup> <a name="isTotpInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotpInput"></a>

```typescript
public readonly isTotpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | SyntheticsGlobalVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---

##### `parseTestIdInput`<sup>Optional</sup> <a name="parseTestIdInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput"></a>

```typescript
public readonly parseTestIdInput: string;
```

- *Type:* string

---

##### `parseTestOptionsInput`<sup>Optional</sup> <a name="parseTestOptionsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput"></a>

```typescript
public readonly parseTestOptionsInput: IResolvable | SyntheticsGlobalVariableParseTestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---

##### `restrictedRolesInput`<sup>Optional</sup> <a name="restrictedRolesInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput"></a>

```typescript
public readonly restrictedRolesInput: string[];
```

- *Type:* string[]

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput"></a>

```typescript
public readonly secureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isFido`<sup>Required</sup> <a name="isFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isFido"></a>

```typescript
public readonly isFido: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTotp`<sup>Required</sup> <a name="isTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.isTotp"></a>

```typescript
public readonly isTotp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parseTestId`<sup>Required</sup> <a name="parseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId"></a>

```typescript
public readonly parseTestId: string;
```

- *Type:* string

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsGlobalVariableConfig <a name="SyntheticsGlobalVariableConfig" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

const syntheticsGlobalVariableConfig: syntheticsGlobalVariable.SyntheticsGlobalVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name">name</a></code> | <code>string</code> | Synthetics global variable name. Must be all uppercase with underscores. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description">description</a></code> | <code>string</code> | Description of the global variable. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isFido">isFido</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the global variable is a FIDO variable. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isTotp">isTotp</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the global variable is a TOTP variable. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options">options</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId">parseTestId</a></code> | <code>string</code> | Id of the Synthetics test to use for a variable from test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions">parseTestOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | parse_test_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | A list of role identifiers to associate with the Synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the value of the global variable is hidden. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags to associate with your synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value">value</a></code> | <code>string</code> | The value of the global variable. Required unless `is_fido` is set to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Synthetics global variable name. Must be all uppercase with underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the global variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}

---

##### `isFido`<sup>Optional</sup> <a name="isFido" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isFido"></a>

```typescript
public readonly isFido: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the global variable is a FIDO variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#is_fido SyntheticsGlobalVariable#is_fido}

---

##### `isTotp`<sup>Optional</sup> <a name="isTotp" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.isTotp"></a>

```typescript
public readonly isTotp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the global variable is a TOTP variable. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#is_totp SyntheticsGlobalVariable#is_totp}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options"></a>

```typescript
public readonly options: IResolvable | SyntheticsGlobalVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}

---

##### `parseTestId`<sup>Optional</sup> <a name="parseTestId" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId"></a>

```typescript
public readonly parseTestId: string;
```

- *Type:* string

Id of the Synthetics test to use for a variable from test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}

---

##### `parseTestOptions`<sup>Optional</sup> <a name="parseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions"></a>

```typescript
public readonly parseTestOptions: IResolvable | SyntheticsGlobalVariableParseTestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

parse_test_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}

---

##### `restrictedRoles`<sup>Optional</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

A list of role identifiers to associate with the Synthetics global variable.

**Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the value of the global variable is hidden.

This setting is automatically set to `true` if `is_totp` or `is_fido` is set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the global variable. Required unless `is_fido` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

### SyntheticsGlobalVariableOptions <a name="SyntheticsGlobalVariableOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

const syntheticsGlobalVariableOptions: syntheticsGlobalVariable.SyntheticsGlobalVariableOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters">totpParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | totp_parameters block. |

---

##### `totpParameters`<sup>Optional</sup> <a name="totpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters"></a>

```typescript
public readonly totpParameters: IResolvable | SyntheticsGlobalVariableOptionsTotpParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

totp_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}

---

### SyntheticsGlobalVariableOptionsTotpParameters <a name="SyntheticsGlobalVariableOptionsTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

const syntheticsGlobalVariableOptionsTotpParameters: syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits">digits</a></code> | <code>number</code> | Number of digits for the OTP. Value must be between 4 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval">refreshInterval</a></code> | <code>number</code> | Interval for which to refresh the token (in seconds). Value must be between 0 and 999. |

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

Number of digits for the OTP. Value must be between 4 and 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: number;
```

- *Type:* number

Interval for which to refresh the token (in seconds). Value must be between 0 and 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}

---

### SyntheticsGlobalVariableParseTestOptions <a name="SyntheticsGlobalVariableParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

const syntheticsGlobalVariableParseTestOptions: syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type">type</a></code> | <code>string</code> | Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field">field</a></code> | <code>string</code> | Required when type = `http_header`. Defines the header to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName">localVariableName</a></code> | <code>string</code> | When type is `local_variable`, name of the local variable to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser">parser</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | parser block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Required when type = `http_header`. Defines the header to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}

---

##### `localVariableName`<sup>Optional</sup> <a name="localVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName"></a>

```typescript
public readonly localVariableName: string;
```

- *Type:* string

When type is `local_variable`, name of the local variable to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}

---

##### `parser`<sup>Optional</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser"></a>

```typescript
public readonly parser: IResolvable | SyntheticsGlobalVariableParseTestOptionsParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}

---

### SyntheticsGlobalVariableParseTestOptionsParser <a name="SyntheticsGlobalVariableParseTestOptionsParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

const syntheticsGlobalVariableParseTestOptionsParser: syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type">type</a></code> | <code>string</code> | Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value">value</a></code> | <code>string</code> | Value for the parser to use, required for type `json_path` or `regex`. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for the parser to use, required for type `json_path` or `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsGlobalVariableOptionsList <a name="SyntheticsGlobalVariableOptionsList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get"></a>

```typescript
public get(index: number): SyntheticsGlobalVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>[]

---


### SyntheticsGlobalVariableOptionsOutputReference <a name="SyntheticsGlobalVariableOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters">putTotpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters">resetTotpParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTotpParameters` <a name="putTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters"></a>

```typescript
public putTotpParameters(value: IResolvable | SyntheticsGlobalVariableOptionsTotpParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---

##### `resetTotpParameters` <a name="resetTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters"></a>

```typescript
public resetTotpParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters">totpParameters</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList">SyntheticsGlobalVariableOptionsTotpParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput">totpParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totpParameters`<sup>Required</sup> <a name="totpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters"></a>

```typescript
public readonly totpParameters: SyntheticsGlobalVariableOptionsTotpParametersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList">SyntheticsGlobalVariableOptionsTotpParametersList</a>

---

##### `totpParametersInput`<sup>Optional</sup> <a name="totpParametersInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput"></a>

```typescript
public readonly totpParametersInput: IResolvable | SyntheticsGlobalVariableOptionsTotpParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

---


### SyntheticsGlobalVariableOptionsTotpParametersList <a name="SyntheticsGlobalVariableOptionsTotpParametersList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get"></a>

```typescript
public get(index: number): SyntheticsGlobalVariableOptionsTotpParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableOptionsTotpParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>[]

---


### SyntheticsGlobalVariableOptionsTotpParametersOutputReference <a name="SyntheticsGlobalVariableOptionsTotpParametersOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput">digitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits">digits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput"></a>

```typescript
public readonly digitsInput: number;
```

- *Type:* number

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput"></a>

```typescript
public readonly refreshIntervalInput: number;
```

- *Type:* number

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableOptionsTotpParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

---


### SyntheticsGlobalVariableParseTestOptionsList <a name="SyntheticsGlobalVariableParseTestOptionsList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get"></a>

```typescript
public get(index: number): SyntheticsGlobalVariableParseTestOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableParseTestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>[]

---


### SyntheticsGlobalVariableParseTestOptionsOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser">putParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName">resetLocalVariableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser">resetParser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParser` <a name="putParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser"></a>

```typescript
public putParser(value: IResolvable | SyntheticsGlobalVariableParseTestOptionsParser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetLocalVariableName` <a name="resetLocalVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName"></a>

```typescript
public resetLocalVariableName(): void
```

##### `resetParser` <a name="resetParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser"></a>

```typescript
public resetParser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser">parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList">SyntheticsGlobalVariableParseTestOptionsParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput">localVariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput">parserInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName">localVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser"></a>

```typescript
public readonly parser: SyntheticsGlobalVariableParseTestOptionsParserList;
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList">SyntheticsGlobalVariableParseTestOptionsParserList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `localVariableNameInput`<sup>Optional</sup> <a name="localVariableNameInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput"></a>

```typescript
public readonly localVariableNameInput: string;
```

- *Type:* string

---

##### `parserInput`<sup>Optional</sup> <a name="parserInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput"></a>

```typescript
public readonly parserInput: IResolvable | SyntheticsGlobalVariableParseTestOptionsParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `localVariableName`<sup>Required</sup> <a name="localVariableName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName"></a>

```typescript
public readonly localVariableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableParseTestOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

---


### SyntheticsGlobalVariableParseTestOptionsParserList <a name="SyntheticsGlobalVariableParseTestOptionsParserList" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get"></a>

```typescript
public get(index: number): SyntheticsGlobalVariableParseTestOptionsParserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableParseTestOptionsParser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>[]

---


### SyntheticsGlobalVariableParseTestOptionsParserOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsParserOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer"></a>

```typescript
import { syntheticsGlobalVariable } from '@cdktf/provider-datadog'

new syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsGlobalVariableParseTestOptionsParser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

---



