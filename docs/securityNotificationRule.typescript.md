# `securityNotificationRule` Submodule <a name="`securityNotificationRule` Submodule" id="@cdktf/provider-datadog.securityNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationRule <a name="SecurityNotificationRule" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule datadog_security_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

new securityNotificationRule.SecurityNotificationRule(scope: Construct, id: string, config: SecurityNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig">SecurityNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig">SecurityNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors">resetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation">resetTimeAggregation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors"></a>

```typescript
public putSelectors(value: SecurityNotificationRuleSelectors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors"></a>

```typescript
public resetSelectors(): void
```

##### `resetTimeAggregation` <a name="resetTimeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation"></a>

```typescript
public resetTimeAggregation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

securityNotificationRule.SecurityNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

securityNotificationRule.SecurityNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

securityNotificationRule.SecurityNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

securityNotificationRule.SecurityNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle">createdByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName">createdByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt">modifiedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle">modifiedByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName">modifiedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput">timeAggregationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation">timeAggregation</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdByHandle`<sup>Required</sup> <a name="createdByHandle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle"></a>

```typescript
public readonly createdByHandle: string;
```

- *Type:* string

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName"></a>

```typescript
public readonly createdByName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: number;
```

- *Type:* number

---

##### `modifiedByHandle`<sup>Required</sup> <a name="modifiedByHandle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle"></a>

```typescript
public readonly modifiedByHandle: string;
```

- *Type:* string

---

##### `modifiedByName`<sup>Required</sup> <a name="modifiedByName" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName"></a>

```typescript
public readonly modifiedByName: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors"></a>

```typescript
public readonly selectors: SecurityNotificationRuleSelectorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | SecurityNotificationRuleSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `timeAggregationInput`<sup>Optional</sup> <a name="timeAggregationInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput"></a>

```typescript
public readonly timeAggregationInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `timeAggregation`<sup>Required</sup> <a name="timeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation"></a>

```typescript
public readonly timeAggregation: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationRuleConfig <a name="SecurityNotificationRuleConfig" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.Initializer"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

const securityNotificationRuleConfig: securityNotificationRule.SecurityNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets">targets</a></code> | <code>string[]</code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation">timeAggregation</a></code> | <code>number</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors"></a>

```typescript
public readonly selectors: SecurityNotificationRuleSelectors;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `timeAggregation`<sup>Optional</sup> <a name="timeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation"></a>

```typescript
public readonly timeAggregation: number;
```

- *Type:* number

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

### SecurityNotificationRuleSelectors <a name="SecurityNotificationRuleSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.Initializer"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

const securityNotificationRuleSelectors: securityNotificationRule.SecurityNotificationRuleSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes">ruleTypes</a></code> | <code>string[]</code> | Specifies security rule types for filtering signals and vulnerabilities that generate notifications. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource">triggerSource</a></code> | <code>string</code> | The type of security issues the rule applies to. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query">query</a></code> | <code>string</code> | Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities">severities</a></code> | <code>string[]</code> | The security rules severities to consider. |

---

##### `ruleTypes`<sup>Required</sup> <a name="ruleTypes" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes"></a>

```typescript
public readonly ruleTypes: string[];
```

- *Type:* string[]

Specifies security rule types for filtering signals and vulnerabilities that generate notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

The type of security issues the rule applies to.

Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

The security rules severities to consider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityNotificationRuleSelectorsOutputReference <a name="SecurityNotificationRuleSelectorsOutputReference" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer"></a>

```typescript
import { securityNotificationRule } from '@cdktf/provider-datadog'

new securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities"></a>

```typescript
public resetSeverities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput">ruleTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput">triggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes">ruleTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `ruleTypesInput`<sup>Optional</sup> <a name="ruleTypesInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput"></a>

```typescript
public readonly ruleTypesInput: string[];
```

- *Type:* string[]

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput"></a>

```typescript
public readonly severitiesInput: string[];
```

- *Type:* string[]

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput"></a>

```typescript
public readonly triggerSourceInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleTypes`<sup>Required</sup> <a name="ruleTypes" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes"></a>

```typescript
public readonly ruleTypes: string[];
```

- *Type:* string[]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityNotificationRuleSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---



