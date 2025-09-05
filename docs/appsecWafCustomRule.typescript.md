# `appsecWafCustomRule` Submodule <a name="`appsecWafCustomRule` Submodule" id="@cdktf/provider-datadog.appsecWafCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafCustomRule <a name="AppsecWafCustomRule" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRule(scope: Construct, id: string, config: AppsecWafCustomRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob">resetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction"></a>

```typescript
public putAction(value: AppsecWafCustomRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition"></a>

```typescript
public putCondition(value: IResolvable | AppsecWafCustomRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---

##### `putScope` <a name="putScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope"></a>

```typescript
public putScope(value: IResolvable | AppsecWafCustomRuleScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetPathGlob` <a name="resetPathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob"></a>

```typescript
public resetPathGlob(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

appsecWafCustomRule.AppsecWafCustomRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsecWafCustomRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsecWafCustomRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafCustomRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput">blockingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput">pathGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput">scopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking">blocking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob">pathGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action"></a>

```typescript
public readonly action: AppsecWafCustomRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition"></a>

```typescript
public readonly condition: AppsecWafCustomRuleConditionList;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope"></a>

```typescript
public readonly scope: AppsecWafCustomRuleScopeList;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | AppsecWafCustomRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---

##### `blockingInput`<sup>Optional</sup> <a name="blockingInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput"></a>

```typescript
public readonly blockingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | AppsecWafCustomRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathGlobInput`<sup>Optional</sup> <a name="pathGlobInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput"></a>

```typescript
public readonly pathGlobInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | AppsecWafCustomRuleScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `blocking`<sup>Required</sup> <a name="blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking"></a>

```typescript
public readonly blocking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathGlob`<sup>Required</sup> <a name="pathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob"></a>

```typescript
public readonly pathGlob: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafCustomRuleAction <a name="AppsecWafCustomRuleAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleAction: appsecWafCustomRule.AppsecWafCustomRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action">action</a></code> | <code>string</code> | Override the default action to take when the WAF custom rule would block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | parameters block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Override the default action to take when the WAF custom rule would block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters"></a>

```typescript
public readonly parameters: AppsecWafCustomRuleActionParameters;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleActionParameters <a name="AppsecWafCustomRuleActionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleActionParameters: appsecWafCustomRule.AppsecWafCustomRuleActionParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location">location</a></code> | <code>string</code> | The location to redirect to when the WAF custom rule triggers. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode">statusCode</a></code> | <code>number</code> | The status code to return when the WAF custom rule triggers. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location to redirect to when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

The status code to return when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}

---

### AppsecWafCustomRuleCondition <a name="AppsecWafCustomRuleCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleCondition: appsecWafCustomRule.AppsecWafCustomRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator">operator</a></code> | <code>string</code> | Operator to use for the WAF Condition. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | parameters block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Operator to use for the WAF Condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#operator AppsecWafCustomRule#operator}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters"></a>

```typescript
public readonly parameters: AppsecWafCustomRuleConditionParameters;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleConditionParameters <a name="AppsecWafCustomRuleConditionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleConditionParameters: appsecWafCustomRule.AppsecWafCustomRuleConditionParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data">data</a></code> | <code>string</code> | Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input">input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | input block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list">list</a></code> | <code>string[]</code> | List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex">regex</a></code> | <code>string</code> | Regex to use with the condition. Only used with match_regex and !match_regex operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value">value</a></code> | <code>string</code> | Store the captured value in the specified tag name. Only used with the capture_data operator. |

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input"></a>

```typescript
public readonly input: IResolvable | AppsecWafCustomRuleConditionParametersInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list"></a>

```typescript
public readonly list: string[];
```

- *Type:* string[]

List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options"></a>

```typescript
public readonly options: AppsecWafCustomRuleConditionParametersOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regex to use with the condition. Only used with match_regex and !match_regex operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Store the captured value in the specified tag name. Only used with the capture_data operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}

---

### AppsecWafCustomRuleConditionParametersInput <a name="AppsecWafCustomRuleConditionParametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleConditionParametersInput: appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address">address</a></code> | <code>string</code> | Input from the request on which the condition should apply. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath">keyPath</a></code> | <code>string[]</code> | Specific path for the input. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Input from the request on which the condition should apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#address AppsecWafCustomRule#address}

---

##### `keyPath`<sup>Optional</sup> <a name="keyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath"></a>

```typescript
public readonly keyPath: string[];
```

- *Type:* string[]

Specific path for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#key_path AppsecWafCustomRule#key_path}

---

### AppsecWafCustomRuleConditionParametersOptions <a name="AppsecWafCustomRuleConditionParametersOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleConditionParametersOptions: appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Evaluate the value as case sensitive. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength">minLength</a></code> | <code>number</code> | Only evaluate this condition if the value has a minimum amount of characters. |

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Evaluate the value as case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Only evaluate this condition if the value has a minimum amount of characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}

---

### AppsecWafCustomRuleConfig <a name="AppsecWafCustomRuleConfig" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleConfig: appsecWafCustomRule.AppsecWafCustomRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking">blocking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the WAF custom rule will block the request. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the WAF custom rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name">name</a></code> | <code>string</code> | The Name of the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags associated with the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob">pathGlob</a></code> | <code>string</code> | The path glob for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope">scope</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blocking`<sup>Required</sup> <a name="blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking"></a>

```typescript
public readonly blocking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the WAF custom rule will block the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the WAF custom rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name of the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags associated with the WAF custom rule.

`category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action"></a>

```typescript
public readonly action: AppsecWafCustomRuleAction;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | AppsecWafCustomRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}

---

##### `pathGlob`<sup>Optional</sup> <a name="pathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob"></a>

```typescript
public readonly pathGlob: string;
```

- *Type:* string

The path glob for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope"></a>

```typescript
public readonly scope: IResolvable | AppsecWafCustomRuleScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}

---

### AppsecWafCustomRuleScope <a name="AppsecWafCustomRuleScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

const appsecWafCustomRuleScope: appsecWafCustomRule.AppsecWafCustomRuleScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env">env</a></code> | <code>string</code> | The environment scope for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service">service</a></code> | <code>string</code> | The service scope for the WAF custom rule. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

The environment scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#env AppsecWafCustomRule#env}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/appsec_waf_custom_rule#service AppsecWafCustomRule#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafCustomRuleActionOutputReference <a name="AppsecWafCustomRuleActionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters"></a>

```typescript
public putParameters(value: AppsecWafCustomRuleActionParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: AppsecWafCustomRuleActionParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | AppsecWafCustomRuleActionParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---


### AppsecWafCustomRuleActionParametersOutputReference <a name="AppsecWafCustomRuleActionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleActionParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---


### AppsecWafCustomRuleConditionList <a name="AppsecWafCustomRuleConditionList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get"></a>

```typescript
public get(index: number): AppsecWafCustomRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---


### AppsecWafCustomRuleConditionOutputReference <a name="AppsecWafCustomRuleConditionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters"></a>

```typescript
public putParameters(value: AppsecWafCustomRuleConditionParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: AppsecWafCustomRuleConditionParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | AppsecWafCustomRuleConditionParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>

---


### AppsecWafCustomRuleConditionParametersInputList <a name="AppsecWafCustomRuleConditionParametersInputList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get"></a>

```typescript
public get(index: number): AppsecWafCustomRuleConditionParametersInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleConditionParametersInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---


### AppsecWafCustomRuleConditionParametersInputOutputReference <a name="AppsecWafCustomRuleConditionParametersInputOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath">resetKeyPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetKeyPath` <a name="resetKeyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath"></a>

```typescript
public resetKeyPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput">keyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath">keyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `keyPathInput`<sup>Optional</sup> <a name="keyPathInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput"></a>

```typescript
public readonly keyPathInput: string[];
```

- *Type:* string[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `keyPath`<sup>Required</sup> <a name="keyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath"></a>

```typescript
public readonly keyPath: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleConditionParametersInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>

---


### AppsecWafCustomRuleConditionParametersOptionsOutputReference <a name="AppsecWafCustomRuleConditionParametersOptionsOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleConditionParametersOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---


### AppsecWafCustomRuleConditionParametersOutputReference <a name="AppsecWafCustomRuleConditionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList">resetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput"></a>

```typescript
public putInput(value: IResolvable | AppsecWafCustomRuleConditionParametersInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions"></a>

```typescript
public putOptions(value: AppsecWafCustomRuleConditionParametersOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---

##### `resetData` <a name="resetData" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetList` <a name="resetList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList"></a>

```typescript
public resetList(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput">inputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput">listInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput">optionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list">list</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input"></a>

```typescript
public readonly input: AppsecWafCustomRuleConditionParametersInputList;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options"></a>

```typescript
public readonly options: AppsecWafCustomRuleConditionParametersOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | AppsecWafCustomRuleConditionParametersInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---

##### `listInput`<sup>Optional</sup> <a name="listInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput"></a>

```typescript
public readonly listInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | AppsecWafCustomRuleConditionParametersOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list"></a>

```typescript
public readonly list: string[];
```

- *Type:* string[]

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleConditionParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---


### AppsecWafCustomRuleScopeList <a name="AppsecWafCustomRuleScopeList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get"></a>

```typescript
public get(index: number): AppsecWafCustomRuleScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---


### AppsecWafCustomRuleScopeOutputReference <a name="AppsecWafCustomRuleScopeOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer"></a>

```typescript
import { appsecWafCustomRule } from '@cdktf/provider-datadog'

new appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput">envInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput"></a>

```typescript
public readonly envInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafCustomRuleScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>

---



