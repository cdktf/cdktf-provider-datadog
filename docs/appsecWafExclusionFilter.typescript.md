# `appsecWafExclusionFilter` Submodule <a name="`appsecWafExclusionFilter` Submodule" id="@cdktf/provider-datadog.appsecWafExclusionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafExclusionFilter <a name="AppsecWafExclusionFilter" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilter(scope: Construct, id: string, config: AppsecWafExclusionFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig">AppsecWafExclusionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig">AppsecWafExclusionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget">putRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery">resetEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch">resetOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob">resetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget">resetRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRulesTarget` <a name="putRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget"></a>

```typescript
public putRulesTarget(value: IResolvable | AppsecWafExclusionFilterRulesTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---

##### `putScope` <a name="putScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope"></a>

```typescript
public putScope(value: IResolvable | AppsecWafExclusionFilterScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---

##### `resetEventQuery` <a name="resetEventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery"></a>

```typescript
public resetEventQuery(): void
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList"></a>

```typescript
public resetIpList(): void
```

##### `resetOnMatch` <a name="resetOnMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch"></a>

```typescript
public resetOnMatch(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPathGlob` <a name="resetPathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob"></a>

```typescript
public resetPathGlob(): void
```

##### `resetRulesTarget` <a name="resetRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget"></a>

```typescript
public resetRulesTarget(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsecWafExclusionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsecWafExclusionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafExclusionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget">rulesTarget</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput">eventQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput">ipListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput">onMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput">parametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput">pathGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput">rulesTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput">scopeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery">eventQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList">ipList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch">onMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters">parameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob">pathGlob</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rulesTarget`<sup>Required</sup> <a name="rulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget"></a>

```typescript
public readonly rulesTarget: AppsecWafExclusionFilterRulesTargetList;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope"></a>

```typescript
public readonly scope: AppsecWafExclusionFilterScopeList;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventQueryInput`<sup>Optional</sup> <a name="eventQueryInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput"></a>

```typescript
public readonly eventQueryInput: string;
```

- *Type:* string

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput"></a>

```typescript
public readonly ipListInput: string[];
```

- *Type:* string[]

---

##### `onMatchInput`<sup>Optional</sup> <a name="onMatchInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput"></a>

```typescript
public readonly onMatchInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput"></a>

```typescript
public readonly parametersInput: string[];
```

- *Type:* string[]

---

##### `pathGlobInput`<sup>Optional</sup> <a name="pathGlobInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput"></a>

```typescript
public readonly pathGlobInput: string;
```

- *Type:* string

---

##### `rulesTargetInput`<sup>Optional</sup> <a name="rulesTargetInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput"></a>

```typescript
public readonly rulesTargetInput: IResolvable | AppsecWafExclusionFilterRulesTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | AppsecWafExclusionFilterScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventQuery`<sup>Required</sup> <a name="eventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery"></a>

```typescript
public readonly eventQuery: string;
```

- *Type:* string

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList"></a>

```typescript
public readonly ipList: string[];
```

- *Type:* string[]

---

##### `onMatch`<sup>Required</sup> <a name="onMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch"></a>

```typescript
public readonly onMatch: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters"></a>

```typescript
public readonly parameters: string[];
```

- *Type:* string[]

---

##### `pathGlob`<sup>Required</sup> <a name="pathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob"></a>

```typescript
public readonly pathGlob: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafExclusionFilterConfig <a name="AppsecWafExclusionFilterConfig" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

const appsecWafExclusionFilterConfig: appsecWafExclusionFilter.AppsecWafExclusionFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description">description</a></code> | <code>string</code> | A description for the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery">eventQuery</a></code> | <code>string</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList">ipList</a></code> | <code>string[]</code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch">onMatch</a></code> | <code>string</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters">parameters</a></code> | <code>string[]</code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob">pathGlob</a></code> | <code>string</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget">rulesTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | rules_target block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope">scope</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `eventQuery`<sup>Optional</sup> <a name="eventQuery" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery"></a>

```typescript
public readonly eventQuery: string;
```

- *Type:* string

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList"></a>

```typescript
public readonly ipList: string[];
```

- *Type:* string[]

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `onMatch`<sup>Optional</sup> <a name="onMatch" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch"></a>

```typescript
public readonly onMatch: string;
```

- *Type:* string

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters"></a>

```typescript
public readonly parameters: string[];
```

- *Type:* string[]

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `pathGlob`<sup>Optional</sup> <a name="pathGlob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob"></a>

```typescript
public readonly pathGlob: string;
```

- *Type:* string

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `rulesTarget`<sup>Optional</sup> <a name="rulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget"></a>

```typescript
public readonly rulesTarget: IResolvable | AppsecWafExclusionFilterRulesTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope"></a>

```typescript
public readonly scope: IResolvable | AppsecWafExclusionFilterScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

### AppsecWafExclusionFilterRulesTarget <a name="AppsecWafExclusionFilterRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

const appsecWafExclusionFilterRulesTarget: appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId">ruleId</a></code> | <code>string</code> | Target a single WAF rule based on its identifier. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | tags block. |

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Target a single WAF rule based on its identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#rule_id AppsecWafExclusionFilter#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags"></a>

```typescript
public readonly tags: AppsecWafExclusionFilterRulesTargetTags;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#tags AppsecWafExclusionFilter#tags}

---

### AppsecWafExclusionFilterRulesTargetTags <a name="AppsecWafExclusionFilterRulesTargetTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

const appsecWafExclusionFilterRulesTargetTags: appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category">category</a></code> | <code>string</code> | The category of the targeted WAF rules. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type">type</a></code> | <code>string</code> | The type of the targeted WAF rules. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The category of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}

---

### AppsecWafExclusionFilterScope <a name="AppsecWafExclusionFilterScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

const appsecWafExclusionFilterScope: appsecWafExclusionFilter.AppsecWafExclusionFilterScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env">env</a></code> | <code>string</code> | Deploy on this environment. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service">service</a></code> | <code>string</code> | Deploy on this service. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

Deploy on this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#env AppsecWafExclusionFilter#env}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Deploy on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/appsec_waf_exclusion_filter#service AppsecWafExclusionFilter#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafExclusionFilterRulesTargetList <a name="AppsecWafExclusionFilterRulesTargetList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get"></a>

```typescript
public get(index: number): AppsecWafExclusionFilterRulesTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafExclusionFilterRulesTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>[]

---


### AppsecWafExclusionFilterRulesTargetOutputReference <a name="AppsecWafExclusionFilterRulesTargetOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags"></a>

```typescript
public putTags(value: AppsecWafExclusionFilterRulesTargetTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags"></a>

```typescript
public readonly tags: AppsecWafExclusionFilterRulesTargetTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppsecWafExclusionFilterRulesTargetTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafExclusionFilterRulesTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>

---


### AppsecWafExclusionFilterRulesTargetTagsOutputReference <a name="AppsecWafExclusionFilterRulesTargetTagsOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafExclusionFilterRulesTargetTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---


### AppsecWafExclusionFilterScopeList <a name="AppsecWafExclusionFilterScopeList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get"></a>

```typescript
public get(index: number): AppsecWafExclusionFilterScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafExclusionFilterScope[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>[]

---


### AppsecWafExclusionFilterScopeOutputReference <a name="AppsecWafExclusionFilterScopeOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer"></a>

```typescript
import { appsecWafExclusionFilter } from '@cdktf/provider-datadog'

new appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput">envInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput"></a>

```typescript
public readonly envInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsecWafExclusionFilterScope;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>

---



