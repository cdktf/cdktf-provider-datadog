# `csmThreatsAgentRule` Submodule <a name="`csmThreatsAgentRule` Submodule" id="@cdktf/provider-datadog.csmThreatsAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsmThreatsAgentRule <a name="CsmThreatsAgentRule" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

new csmThreatsAgentRule.CsmThreatsAgentRule(scope: Construct, id: string, config: CsmThreatsAgentRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags">resetProductTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions"></a>

```typescript
public putActions(value: IResolvable | CsmThreatsAgentRuleActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetProductTags` <a name="resetProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags"></a>

```typescript
public resetProductTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CsmThreatsAgentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CsmThreatsAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsmThreatsAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput">productTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags">productTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions"></a>

```typescript
public readonly actions: CsmThreatsAgentRuleActionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | CsmThreatsAgentRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `productTagsInput`<sup>Optional</sup> <a name="productTagsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput"></a>

```typescript
public readonly productTagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `productTags`<sup>Required</sup> <a name="productTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags"></a>

```typescript
public readonly productTags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CsmThreatsAgentRuleActions <a name="CsmThreatsAgentRuleActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

const csmThreatsAgentRuleActions: csmThreatsAgentRule.CsmThreatsAgentRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set">set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | set block. |

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash"></a>

```typescript
public readonly hash: CsmThreatsAgentRuleActionsHash;
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#hash CsmThreatsAgentRule#hash}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set"></a>

```typescript
public readonly set: CsmThreatsAgentRuleActionsSet;
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}

---

### CsmThreatsAgentRuleActionsHash <a name="CsmThreatsAgentRuleActionsHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

const csmThreatsAgentRuleActionsHash: csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash = { ... }
```


### CsmThreatsAgentRuleActionsSet <a name="CsmThreatsAgentRuleActionsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

const csmThreatsAgentRuleActionsSet: csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name">name</a></code> | <code>string</code> | The name of the set action. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append">append</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to append to the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field">field</a></code> | <code>string</code> | The field to get the value from. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope">scope</a></code> | <code>string</code> | The scope of the set action (process, container, cgroup, or empty). |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size">size</a></code> | <code>number</code> | The maximum size of the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl">ttl</a></code> | <code>number</code> | The time to live for the set in nanoseconds. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value">value</a></code> | <code>string</code> | The value to set. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append"></a>

```typescript
public readonly append: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to append to the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The field to get the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the set action (process, container, cgroup, or empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The maximum size of the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time to live for the set in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}

---

### CsmThreatsAgentRuleConfig <a name="CsmThreatsAgentRuleConfig" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

const csmThreatsAgentRuleConfig: csmThreatsAgentRule.CsmThreatsAgentRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression">expression</a></code> | <code>string</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description">description</a></code> | <code>string</code> | A description for the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the Agent rule is enabled. Must not be used without policy_id. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | The ID of the agent policy in which the rule is saved. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags">productTags</a></code> | <code>string[]</code> | The list of product tags associated with the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | CsmThreatsAgentRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the Agent rule is enabled. Must not be used without policy_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The ID of the agent policy in which the rule is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}

---

##### `productTags`<sup>Optional</sup> <a name="productTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags"></a>

```typescript
public readonly productTags: string[];
```

- *Type:* string[]

The list of product tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### CsmThreatsAgentRuleActionsHashOutputReference <a name="CsmThreatsAgentRuleActionsHashOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

new csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsmThreatsAgentRuleActionsHash;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

---


### CsmThreatsAgentRuleActionsList <a name="CsmThreatsAgentRuleActionsList" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

new csmThreatsAgentRule.CsmThreatsAgentRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get"></a>

```typescript
public get(index: number): CsmThreatsAgentRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsmThreatsAgentRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>[]

---


### CsmThreatsAgentRuleActionsOutputReference <a name="CsmThreatsAgentRuleActionsOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

new csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash"></a>

```typescript
public putHash(value: CsmThreatsAgentRuleActionsHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet"></a>

```typescript
public putSet(value: CsmThreatsAgentRuleActionsSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

---

##### `resetSet` <a name="resetSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set">set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput">hashInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput">setInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash"></a>

```typescript
public readonly hash: CsmThreatsAgentRuleActionsHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set"></a>

```typescript
public readonly set: CsmThreatsAgentRuleActionsSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput"></a>

```typescript
public readonly hashInput: IResolvable | CsmThreatsAgentRuleActionsHash;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput"></a>

```typescript
public readonly setInput: IResolvable | CsmThreatsAgentRuleActionsSet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsmThreatsAgentRuleActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>

---


### CsmThreatsAgentRuleActionsSetOutputReference <a name="CsmThreatsAgentRuleActionsSetOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer"></a>

```typescript
import { csmThreatsAgentRule } from '@cdktf/provider-datadog'

new csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend">resetAppend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppend` <a name="resetAppend" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend"></a>

```typescript
public resetAppend(): void
```

##### `resetField` <a name="resetField" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput">appendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append">append</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appendInput`<sup>Optional</sup> <a name="appendInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput"></a>

```typescript
public readonly appendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append"></a>

```typescript
public readonly append: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsmThreatsAgentRuleActionsSet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

---



