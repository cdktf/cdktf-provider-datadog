# `incidentNotificationRule` Submodule <a name="`incidentNotificationRule` Submodule" id="@cdktf/provider-datadog.incidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentNotificationRule <a name="IncidentNotificationRule" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

new incidentNotificationRule.IncidentNotificationRule(scope: Construct, id: string, config: IncidentNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig">IncidentNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig">IncidentNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate">resetNotificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn">resetRenotifyOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions"></a>

```typescript
public putConditions(value: IResolvable | IncidentNotificationRuleConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNotificationTemplate` <a name="resetNotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate"></a>

```typescript
public resetNotificationTemplate(): void
```

##### `resetRenotifyOn` <a name="resetRenotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn"></a>

```typescript
public resetRenotifyOn(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

incidentNotificationRule.IncidentNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

incidentNotificationRule.IncidentNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

incidentNotificationRule.IncidentNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

incidentNotificationRule.IncidentNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput">handlesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput">incidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput">notificationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput">renotifyOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput">triggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles">handles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate">notificationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn">renotifyOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions"></a>

```typescript
public readonly conditions: IncidentNotificationRuleConditionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | IncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `handlesInput`<sup>Optional</sup> <a name="handlesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput"></a>

```typescript
public readonly handlesInput: string[];
```

- *Type:* string[]

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput"></a>

```typescript
public readonly incidentTypeInput: string;
```

- *Type:* string

---

##### `notificationTemplateInput`<sup>Optional</sup> <a name="notificationTemplateInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput"></a>

```typescript
public readonly notificationTemplateInput: string;
```

- *Type:* string

---

##### `renotifyOnInput`<sup>Optional</sup> <a name="renotifyOnInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput"></a>

```typescript
public readonly renotifyOnInput: string[];
```

- *Type:* string[]

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput"></a>

```typescript
public readonly triggerInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles"></a>

```typescript
public readonly handles: string[];
```

- *Type:* string[]

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

##### `notificationTemplate`<sup>Required</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate"></a>

```typescript
public readonly notificationTemplate: string;
```

- *Type:* string

---

##### `renotifyOn`<sup>Required</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn"></a>

```typescript
public readonly renotifyOn: string[];
```

- *Type:* string[]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentNotificationRuleConditions <a name="IncidentNotificationRuleConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.Initializer"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

const incidentNotificationRuleConditions: incidentNotificationRule.IncidentNotificationRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field">field</a></code> | <code>string</code> | The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values">values</a></code> | <code>string[]</code> | The value(s) to compare against. Multiple values are ORed together. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#field IncidentNotificationRule#field}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The value(s) to compare against. Multiple values are ORed together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#values IncidentNotificationRule#values}

---

### IncidentNotificationRuleConfig <a name="IncidentNotificationRuleConfig" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.Initializer"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

const incidentNotificationRuleConfig: incidentNotificationRule.IncidentNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles">handles</a></code> | <code>string[]</code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType">incidentType</a></code> | <code>string</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger">trigger</a></code> | <code>string</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate">notificationTemplate</a></code> | <code>string</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn">renotifyOn</a></code> | <code>string[]</code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles"></a>

```typescript
public readonly handles: string[];
```

- *Type:* string[]

The notification handles (targets) for this rule.

Examples:

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | IncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `notificationTemplate`<sup>Optional</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate"></a>

```typescript
public readonly notificationTemplate: string;
```

- *Type:* string

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `renotifyOn`<sup>Optional</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn"></a>

```typescript
public readonly renotifyOn: string[];
```

- *Type:* string[]

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentNotificationRuleConditionsList <a name="IncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

new incidentNotificationRule.IncidentNotificationRuleConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get"></a>

```typescript
public get(index: number): IncidentNotificationRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>[]

---


### IncidentNotificationRuleConditionsOutputReference <a name="IncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```typescript
import { incidentNotificationRule } from '@cdktf/provider-datadog'

new incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IncidentNotificationRuleConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>

---



