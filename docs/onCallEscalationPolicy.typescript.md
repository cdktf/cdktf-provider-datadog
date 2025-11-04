# `onCallEscalationPolicy` Submodule <a name="`onCallEscalationPolicy` Submodule" id="@cdktf/provider-datadog.onCallEscalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallEscalationPolicy <a name="OnCallEscalationPolicy" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

new onCallEscalationPolicy.OnCallEscalationPolicy(scope: Construct, id: string, config: OnCallEscalationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig">OnCallEscalationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig">OnCallEscalationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd">resetResolvePageOnPolicyEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStep` <a name="putStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep"></a>

```typescript
public putStep(value: IResolvable | OnCallEscalationPolicyStep[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]

---

##### `resetResolvePageOnPolicyEnd` <a name="resetResolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd"></a>

```typescript
public resetResolvePageOnPolicyEnd(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep"></a>

```typescript
public resetStep(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallEscalationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallEscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnCallEscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step">step</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput">resolvePageOnPolicyEndInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput">stepInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd">resolvePageOnPolicyEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step"></a>

```typescript
public readonly step: OnCallEscalationPolicyStepList;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resolvePageOnPolicyEndInput`<sup>Optional</sup> <a name="resolvePageOnPolicyEndInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput"></a>

```typescript
public readonly resolvePageOnPolicyEndInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput"></a>

```typescript
public readonly stepInput: IResolvable | OnCallEscalationPolicyStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resolvePageOnPolicyEnd`<sup>Required</sup> <a name="resolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd"></a>

```typescript
public readonly resolvePageOnPolicyEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallEscalationPolicyConfig <a name="OnCallEscalationPolicyConfig" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

const onCallEscalationPolicyConfig: onCallEscalationPolicy.OnCallEscalationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name">name</a></code> | <code>string</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd">resolvePageOnPolicyEnd</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries">retries</a></code> | <code>number</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step">step</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]</code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams">teams</a></code> | <code>string[]</code> | A list of team ids associated with the escalation policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `resolvePageOnPolicyEnd`<sup>Optional</sup> <a name="resolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd"></a>

```typescript
public readonly resolvePageOnPolicyEnd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, pages will be automatically resolved if unacknowledged after the final step. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step"></a>

```typescript
public readonly step: IResolvable | OnCallEscalationPolicyStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

### OnCallEscalationPolicyStep <a name="OnCallEscalationPolicyStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

const onCallEscalationPolicyStep: onCallEscalationPolicy.OnCallEscalationPolicyStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds">escalateAfterSeconds</a></code> | <code>number</code> | Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment">assignment</a></code> | <code>string</code> | Specifies how this escalation step will assign targets. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target">target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]</code> | target block. |

---

##### `escalateAfterSeconds`<sup>Required</sup> <a name="escalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds"></a>

```typescript
public readonly escalateAfterSeconds: number;
```

- *Type:* number

Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#escalate_after_seconds OnCallEscalationPolicy#escalate_after_seconds}

---

##### `assignment`<sup>Optional</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment"></a>

```typescript
public readonly assignment: string;
```

- *Type:* string

Specifies how this escalation step will assign targets.

Can be `default` (page all targets at once) or `round-robin`. Valid values are `default`, `round-robin`. Defaults to `"default"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#assignment OnCallEscalationPolicy#assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target"></a>

```typescript
public readonly target: IResolvable | OnCallEscalationPolicyStepTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#target OnCallEscalationPolicy#target}

---

### OnCallEscalationPolicyStepTarget <a name="OnCallEscalationPolicyStepTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

const onCallEscalationPolicyStepTarget: onCallEscalationPolicy.OnCallEscalationPolicyStepTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule">schedule</a></code> | <code>string</code> | Targeted schedule ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team">team</a></code> | <code>string</code> | Targeted team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user">user</a></code> | <code>string</code> | Targeted user ID. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Targeted schedule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#schedule OnCallEscalationPolicy#schedule}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

Targeted team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#team OnCallEscalationPolicy#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Targeted user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/on_call_escalation_policy#user OnCallEscalationPolicy#user}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallEscalationPolicyStepList <a name="OnCallEscalationPolicyStepList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

new onCallEscalationPolicy.OnCallEscalationPolicyStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get"></a>

```typescript
public get(index: number): OnCallEscalationPolicyStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallEscalationPolicyStep[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>[]

---


### OnCallEscalationPolicyStepOutputReference <a name="OnCallEscalationPolicyStepOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

new onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment">resetAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget"></a>

```typescript
public putTarget(value: IResolvable | OnCallEscalationPolicyStepTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]

---

##### `resetAssignment` <a name="resetAssignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment"></a>

```typescript
public resetAssignment(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput">assignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput">escalateAfterSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput">targetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment">assignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds">escalateAfterSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target"></a>

```typescript
public readonly target: OnCallEscalationPolicyStepTargetList;
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a>

---

##### `assignmentInput`<sup>Optional</sup> <a name="assignmentInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput"></a>

```typescript
public readonly assignmentInput: string;
```

- *Type:* string

---

##### `escalateAfterSecondsInput`<sup>Optional</sup> <a name="escalateAfterSecondsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput"></a>

```typescript
public readonly escalateAfterSecondsInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | OnCallEscalationPolicyStepTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]

---

##### `assignment`<sup>Required</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment"></a>

```typescript
public readonly assignment: string;
```

- *Type:* string

---

##### `escalateAfterSeconds`<sup>Required</sup> <a name="escalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds"></a>

```typescript
public readonly escalateAfterSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallEscalationPolicyStep;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>

---


### OnCallEscalationPolicyStepTargetList <a name="OnCallEscalationPolicyStepTargetList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

new onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get"></a>

```typescript
public get(index: number): OnCallEscalationPolicyStepTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallEscalationPolicyStepTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>[]

---


### OnCallEscalationPolicyStepTargetOutputReference <a name="OnCallEscalationPolicyStepTargetOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer"></a>

```typescript
import { onCallEscalationPolicy } from '@cdktf/provider-datadog'

new onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTeam` <a name="resetTeam" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam"></a>

```typescript
public resetTeam(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput">teamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OnCallEscalationPolicyStepTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>

---



