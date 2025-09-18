# `restrictionPolicy` Submodule <a name="`restrictionPolicy` Submodule" id="@cdktf/provider-datadog.restrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RestrictionPolicy <a name="RestrictionPolicy" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy datadog_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

new restrictionPolicy.RestrictionPolicy(scope: Construct, id: string, config: RestrictionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig">RestrictionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig">RestrictionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings">putBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetBindings">resetBindings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBindings` <a name="putBindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings"></a>

```typescript
public putBindings(value: IResolvable | RestrictionPolicyBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]

---

##### `resetBindings` <a name="resetBindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetBindings"></a>

```typescript
public resetBindings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RestrictionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

restrictionPolicy.RestrictionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

restrictionPolicy.RestrictionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

restrictionPolicy.RestrictionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

restrictionPolicy.RestrictionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RestrictionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RestrictionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RestrictionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RestrictionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList">RestrictionPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindingsInput">bindingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindings"></a>

```typescript
public readonly bindings: RestrictionPolicyBindingsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList">RestrictionPolicyBindingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `bindingsInput`<sup>Optional</sup> <a name="bindingsInput" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindingsInput"></a>

```typescript
public readonly bindingsInput: IResolvable | RestrictionPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RestrictionPolicyBindings <a name="RestrictionPolicyBindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.Initializer"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

const restrictionPolicyBindings: restrictionPolicy.RestrictionPolicyBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.principals">principals</a></code> | <code>string[]</code> | An array of principals. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.relation">relation</a></code> | <code>string</code> | The role/level of access. See this page for more details https://docs.datadoghq.com/api/latest/restriction-policies/#supported-relations-for-resources. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

An array of principals.

A principal is a subject or group of subjects. Each principal is formatted as `type:id`. Supported types: `role`, `team`, `user`, and `org`. Org ID can be obtained using a `GET /api/v2/current_user` API request. Find it in the `data.relationships.org.data.id` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy#principals RestrictionPolicy#principals}

---

##### `relation`<sup>Required</sup> <a name="relation" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.relation"></a>

```typescript
public readonly relation: string;
```

- *Type:* string

The role/level of access. See this page for more details https://docs.datadoghq.com/api/latest/restriction-policies/#supported-relations-for-resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy#relation RestrictionPolicy#relation}

---

### RestrictionPolicyConfig <a name="RestrictionPolicyConfig" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.Initializer"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

const restrictionPolicyConfig: restrictionPolicy.RestrictionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Identifier for the resource, formatted as resource_type:resource_id. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.bindings">bindings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]</code> | bindings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Identifier for the resource, formatted as resource_type:resource_id.

Resources to define `resource_type` : 
* [List of supported resources](https://docs.datadoghq.com/account_management/rbac/granular_access)
* [Resource type definition](https://docs.datadoghq.com/api/latest/restriction-policies/#supported-resources)

Restrictions :
* Dashboards : support is in private beta. Reach out to your Datadog contact or support to enable this.
* Monitors : Management of restriction policy through terraform is now available in Preview. Please request access via https://docs.datadoghq.com/help

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy#resource_id RestrictionPolicy#resource_id}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.bindings"></a>

```typescript
public readonly bindings: IResolvable | RestrictionPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]

bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/restriction_policy#bindings RestrictionPolicy#bindings}

---

## Classes <a name="Classes" id="Classes"></a>

### RestrictionPolicyBindingsList <a name="RestrictionPolicyBindingsList" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

new restrictionPolicy.RestrictionPolicyBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get"></a>

```typescript
public get(index: number): RestrictionPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RestrictionPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>[]

---


### RestrictionPolicyBindingsOutputReference <a name="RestrictionPolicyBindingsOutputReference" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer"></a>

```typescript
import { restrictionPolicy } from '@cdktf/provider-datadog'

new restrictionPolicy.RestrictionPolicyBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relationInput">relationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relation">relation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `relationInput`<sup>Optional</sup> <a name="relationInput" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relationInput"></a>

```typescript
public readonly relationInput: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `relation`<sup>Required</sup> <a name="relation" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relation"></a>

```typescript
public readonly relation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RestrictionPolicyBindings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>

---



