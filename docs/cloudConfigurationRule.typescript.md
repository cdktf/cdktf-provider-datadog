# `cloudConfigurationRule` Submodule <a name="`cloudConfigurationRule` Submodule" id="@cdktf/provider-datadog.cloudConfigurationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigurationRule <a name="CloudConfigurationRule" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule datadog_cloud_configuration_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

new cloudConfigurationRule.CloudConfigurationRule(scope: Construct, id: string, config: CloudConfigurationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes">resetRelatedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter"></a>

```typescript
public putFilter(value: IResolvable | CloudConfigurationRuleFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetRelatedResourceTypes` <a name="resetRelatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes"></a>

```typescript
public resetRelatedResourceTypes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudConfigurationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

cloudConfigurationRule.CloudConfigurationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

cloudConfigurationRule.CloudConfigurationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

cloudConfigurationRule.CloudConfigurationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudConfigurationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudConfigurationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudConfigurationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudConfigurationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList">CloudConfigurationRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput">notificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput">relatedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes">relatedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filter"></a>

```typescript
public readonly filter: CloudConfigurationRuleFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList">CloudConfigurationRuleFilterList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | CloudConfigurationRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: string[];
```

- *Type:* string[]

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `relatedResourceTypesInput`<sup>Optional</sup> <a name="relatedResourceTypesInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput"></a>

```typescript
public readonly relatedResourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `relatedResourceTypes`<sup>Required</sup> <a name="relatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes"></a>

```typescript
public readonly relatedResourceTypes: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigurationRuleConfig <a name="CloudConfigurationRuleConfig" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.Initializer"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

const cloudConfigurationRuleConfig: cloudConfigurationRule.CloudConfigurationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the cloud configuration rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message">message</a></code> | <code>string</code> | The message associated to the rule that will be shown in findings and signals. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the cloud configuration rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy">policy</a></code> | <code>string</code> | Policy written in Rego format. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Main resource type to be checked by the rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity">severity</a></code> | <code>string</code> | Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Fields to group by when generating signals, e.g. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications">notifications</a></code> | <code>string[]</code> | Notification targets for signals. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes">relatedResourceTypes</a></code> | <code>string[]</code> | Related resource types to be checked by the rule. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags of the rule, propagated to findings and signals. Defaults to empty list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the cloud configuration rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The message associated to the rule that will be shown in findings and signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#message CloudConfigurationRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the cloud configuration rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#name CloudConfigurationRule#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Policy written in Rego format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#policy CloudConfigurationRule#policy}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Main resource type to be checked by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#severity CloudConfigurationRule#severity}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | CloudConfigurationRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#filter CloudConfigurationRule#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Fields to group by when generating signals, e.g.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

Notification targets for signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}

---

##### `relatedResourceTypes`<sup>Optional</sup> <a name="relatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes"></a>

```typescript
public readonly relatedResourceTypes: string[];
```

- *Type:* string[]

Related resource types to be checked by the rule. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags of the rule, propagated to findings and signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#tags CloudConfigurationRule#tags}

---

### CloudConfigurationRuleFilter <a name="CloudConfigurationRuleFilter" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.Initializer"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

const cloudConfigurationRuleFilter: cloudConfigurationRule.CloudConfigurationRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.action">action</a></code> | <code>string</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.query">query</a></code> | <code>string</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#action CloudConfigurationRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.37.0/docs/resources/cloud_configuration_rule#query CloudConfigurationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigurationRuleFilterList <a name="CloudConfigurationRuleFilterList" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

new cloudConfigurationRule.CloudConfigurationRuleFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get"></a>

```typescript
public get(index: number): CloudConfigurationRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudConfigurationRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>[]

---


### CloudConfigurationRuleFilterOutputReference <a name="CloudConfigurationRuleFilterOutputReference" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer"></a>

```typescript
import { cloudConfigurationRule } from '@cdktf/provider-datadog'

new cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudConfigurationRuleFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleFilter">CloudConfigurationRuleFilter</a>

---



