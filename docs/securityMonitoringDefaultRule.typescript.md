# `securityMonitoringDefaultRule` Submodule <a name="`securityMonitoringDefaultRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringDefaultRule <a name="SecurityMonitoringDefaultRule" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule datadog_security_monitoring_default_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRule(scope: Construct, id: string, config?: SecurityMonitoringDefaultRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig">SecurityMonitoringDefaultRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig">SecurityMonitoringDefaultRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase">putCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase">resetCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCase` <a name="putCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase"></a>

```typescript
public putCase(value: IResolvable | SecurityMonitoringDefaultRuleCase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putCase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter"></a>

```typescript
public putFilter(value: IResolvable | SecurityMonitoringDefaultRuleFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions"></a>

```typescript
public putOptions(value: SecurityMonitoringDefaultRuleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `resetCase` <a name="resetCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCase"></a>

```typescript
public resetCase(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.resetOptions"></a>

```typescript
public resetOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityMonitoringDefaultRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringDefaultRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringDefaultRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringDefaultRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput">caseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput">customTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags">customTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.case"></a>

```typescript
public readonly case: SecurityMonitoringDefaultRuleCaseList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList">SecurityMonitoringDefaultRuleCaseList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filter"></a>

```typescript
public readonly filter: SecurityMonitoringDefaultRuleFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList">SecurityMonitoringDefaultRuleFilterList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.options"></a>

```typescript
public readonly options: SecurityMonitoringDefaultRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference">SecurityMonitoringDefaultRuleOptionsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `caseInput`<sup>Optional</sup> <a name="caseInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.caseInput"></a>

```typescript
public readonly caseInput: IResolvable | SecurityMonitoringDefaultRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityMonitoringDefaultRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.optionsInput"></a>

```typescript
public readonly optionsInput: SecurityMonitoringDefaultRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.customTags"></a>

```typescript
public readonly customTags: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringDefaultRuleCase <a name="SecurityMonitoringDefaultRuleCase" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

const securityMonitoringDefaultRuleCase: securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications">notifications</a></code> | <code>string[]</code> | Notification targets for each rule case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status">status</a></code> | <code>string</code> | Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`. |

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#notifications SecurityMonitoringDefaultRule#notifications}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the rule case to match. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#status SecurityMonitoringDefaultRule#status}

---

### SecurityMonitoringDefaultRuleConfig <a name="SecurityMonitoringDefaultRuleConfig" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

const securityMonitoringDefaultRuleConfig: securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case">case</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags">customTags</a></code> | <code>string[]</code> | Custom tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the rule. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.case"></a>

```typescript
public readonly case: IResolvable | SecurityMonitoringDefaultRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#case SecurityMonitoringDefaultRule#case}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.customTags"></a>

```typescript
public readonly customTags: string[];
```

- *Type:* string[]

Custom tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#custom_tags SecurityMonitoringDefaultRule#custom_tags}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the rule. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#enabled SecurityMonitoringDefaultRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | SecurityMonitoringDefaultRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#filter SecurityMonitoringDefaultRule#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#id SecurityMonitoringDefaultRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleConfig.property.options"></a>

```typescript
public readonly options: SecurityMonitoringDefaultRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#options SecurityMonitoringDefaultRule#options}

---

### SecurityMonitoringDefaultRuleFilter <a name="SecurityMonitoringDefaultRuleFilter" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

const securityMonitoringDefaultRuleFilter: securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action">action</a></code> | <code>string</code> | The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query">query</a></code> | <code>string</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of filtering action. Allowed enum values: require, suppress Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#action SecurityMonitoringDefaultRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#query SecurityMonitoringDefaultRule#query}

---

### SecurityMonitoringDefaultRuleOptions <a name="SecurityMonitoringDefaultRuleOptions" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

const securityMonitoringDefaultRuleOptions: securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |

---

##### `decreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/security_monitoring_default_rule#decrease_criticality_based_on_env SecurityMonitoringDefaultRule#decrease_criticality_based_on_env}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringDefaultRuleCaseList <a name="SecurityMonitoringDefaultRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get"></a>

```typescript
public get(index: number): SecurityMonitoringDefaultRuleCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringDefaultRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>[]

---


### SecurityMonitoringDefaultRuleCaseOutputReference <a name="SecurityMonitoringDefaultRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput">notificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringDefaultRuleCase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleCase">SecurityMonitoringDefaultRuleCase</a>

---


### SecurityMonitoringDefaultRuleFilterList <a name="SecurityMonitoringDefaultRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get"></a>

```typescript
public get(index: number): SecurityMonitoringDefaultRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringDefaultRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>[]

---


### SecurityMonitoringDefaultRuleFilterOutputReference <a name="SecurityMonitoringDefaultRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringDefaultRuleFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleFilter">SecurityMonitoringDefaultRuleFilter</a>

---


### SecurityMonitoringDefaultRuleOptionsOutputReference <a name="SecurityMonitoringDefaultRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringDefaultRule } from '@cdktf/provider-datadog'

new securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">resetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDecreaseCriticalityBasedOnEnv` <a name="resetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```typescript
public resetDecreaseCriticalityBasedOnEnv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decreaseCriticalityBasedOnEnvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `decreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringDefaultRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringDefaultRule.SecurityMonitoringDefaultRuleOptions">SecurityMonitoringDefaultRuleOptions</a>

---



