# `tagPipelineRuleset` Submodule <a name="`tagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.tagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagPipelineRuleset <a name="TagPipelineRuleset" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRuleset(scope: Construct, id: string, config: TagPipelineRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules"></a>

```typescript
public putRules(value: IResolvable | TagPipelineRulesetRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules"></a>

```typescript
public resetRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

tagPipelineRuleset.TagPipelineRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

tagPipelineRuleset.TagPipelineRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

tagPipelineRuleset.TagPipelineRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagPipelineRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules"></a>

```typescript
public readonly rules: TagPipelineRulesetRulesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | TagPipelineRulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagPipelineRulesetConfig <a name="TagPipelineRulesetConfig" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetConfig: tagPipelineRuleset.TagPipelineRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name">name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the ruleset is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the ruleset is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | TagPipelineRulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}

---

### TagPipelineRulesetRules <a name="TagPipelineRulesetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRules: tagPipelineRuleset.TagPipelineRulesetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name">name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping">mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | mapping block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping"></a>

```typescript
public readonly mapping: TagPipelineRulesetRulesMapping;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query"></a>

```typescript
public readonly query: TagPipelineRulesetRulesQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

##### `referenceTable`<sup>Optional</sup> <a name="referenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable"></a>

```typescript
public readonly referenceTable: TagPipelineRulesetRulesReferenceTable;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}

---

### TagPipelineRulesetRulesMapping <a name="TagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRulesMapping: tagPipelineRuleset.TagPipelineRulesetRulesMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey">destinationKey</a></code> | <code>string</code> | The destination key for the mapping. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to apply the mapping only if the destination key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys">sourceKeys</a></code> | <code>string[]</code> | The source keys for the mapping. |

---

##### `destinationKey`<sup>Optional</sup> <a name="destinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey"></a>

```typescript
public readonly destinationKey: string;
```

- *Type:* string

The destination key for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to apply the mapping only if the destination key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `sourceKeys`<sup>Optional</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys"></a>

```typescript
public readonly sourceKeys: string[];
```

- *Type:* string[]

The source keys for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

### TagPipelineRulesetRulesQuery <a name="TagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRulesQuery: tagPipelineRuleset.TagPipelineRulesetRulesQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition">addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | addition block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity">caseInsensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the query matching is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to apply the query only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query">query</a></code> | <code>string</code> | The query string. |

---

##### `addition`<sup>Optional</sup> <a name="addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition"></a>

```typescript
public readonly addition: TagPipelineRulesetRulesQueryAddition;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

addition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}

---

##### `caseInsensitivity`<sup>Optional</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity"></a>

```typescript
public readonly caseInsensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the query matching is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to apply the query only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

### TagPipelineRulesetRulesQueryAddition <a name="TagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRulesQueryAddition: tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key">key</a></code> | <code>string</code> | The key to add. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value">value</a></code> | <code>string</code> | The value to add. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}

---

### TagPipelineRulesetRulesReferenceTable <a name="TagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRulesReferenceTable: tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity">caseInsensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the reference table lookup is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs">fieldPairs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | field_pairs block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to apply the reference table only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys">sourceKeys</a></code> | <code>string[]</code> | The source keys for the reference table lookup. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName">tableName</a></code> | <code>string</code> | The name of the reference table. |

---

##### `caseInsensitivity`<sup>Optional</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity"></a>

```typescript
public readonly caseInsensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the reference table lookup is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `fieldPairs`<sup>Optional</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```typescript
public readonly fieldPairs: IResolvable | TagPipelineRulesetRulesReferenceTableFieldPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to apply the reference table only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `sourceKeys`<sup>Optional</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys"></a>

```typescript
public readonly sourceKeys: string[];
```

- *Type:* string[]

The source keys for the reference table lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}

---

### TagPipelineRulesetRulesReferenceTableFieldPairs <a name="TagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

const tagPipelineRulesetRulesReferenceTableFieldPairs: tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn">inputColumn</a></code> | <code>string</code> | The input column name. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey">outputKey</a></code> | <code>string</code> | The output key name. |

---

##### `inputColumn`<sup>Optional</sup> <a name="inputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn"></a>

```typescript
public readonly inputColumn: string;
```

- *Type:* string

The input column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}

---

##### `outputKey`<sup>Optional</sup> <a name="outputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey"></a>

```typescript
public readonly outputKey: string;
```

- *Type:* string

The output key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TagPipelineRulesetRulesList <a name="TagPipelineRulesetRulesList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get"></a>

```typescript
public get(index: number): TagPipelineRulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>[]

---


### TagPipelineRulesetRulesMappingOutputReference <a name="TagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey">resetDestinationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys">resetSourceKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationKey` <a name="resetDestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey"></a>

```typescript
public resetDestinationKey(): void
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists"></a>

```typescript
public resetIfNotExists(): void
```

##### `resetSourceKeys` <a name="resetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys"></a>

```typescript
public resetSourceKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput">destinationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput">sourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey">destinationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationKeyInput`<sup>Optional</sup> <a name="destinationKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput"></a>

```typescript
public readonly destinationKeyInput: string;
```

- *Type:* string

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput"></a>

```typescript
public readonly ifNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceKeysInput`<sup>Optional</sup> <a name="sourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput"></a>

```typescript
public readonly sourceKeysInput: string[];
```

- *Type:* string[]

---

##### `destinationKey`<sup>Required</sup> <a name="destinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```typescript
public readonly destinationKey: string;
```

- *Type:* string

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```typescript
public readonly sourceKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---


### TagPipelineRulesetRulesOutputReference <a name="TagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping">putMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable">putReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping">resetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable">resetReferenceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMapping` <a name="putMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping"></a>

```typescript
public putMapping(value: TagPipelineRulesetRulesMapping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery"></a>

```typescript
public putQuery(value: TagPipelineRulesetRulesQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `putReferenceTable` <a name="putReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```typescript
public putReferenceTable(value: TagPipelineRulesetRulesReferenceTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `resetMapping` <a name="resetMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping"></a>

```typescript
public resetMapping(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetReferenceTable` <a name="resetReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```typescript
public resetReferenceTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping">mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable">referenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput">mappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput">queryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput">referenceTableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping"></a>

```typescript
public readonly mapping: TagPipelineRulesetRulesMappingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query"></a>

```typescript
public readonly query: TagPipelineRulesetRulesQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a>

---

##### `referenceTable`<sup>Required</sup> <a name="referenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```typescript
public readonly referenceTable: TagPipelineRulesetRulesReferenceTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput"></a>

```typescript
public readonly mappingInput: IResolvable | TagPipelineRulesetRulesMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | TagPipelineRulesetRulesQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `referenceTableInput`<sup>Optional</sup> <a name="referenceTableInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```typescript
public readonly referenceTableInput: IResolvable | TagPipelineRulesetRulesReferenceTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules">TagPipelineRulesetRules</a>

---


### TagPipelineRulesetRulesQueryAdditionOutputReference <a name="TagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesQueryAddition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---


### TagPipelineRulesetRulesQueryOutputReference <a name="TagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition">putAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition">resetAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity">resetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddition` <a name="putAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition"></a>

```typescript
public putAddition(value: TagPipelineRulesetRulesQueryAddition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `resetAddition` <a name="resetAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition"></a>

```typescript
public resetAddition(): void
```

##### `resetCaseInsensitivity` <a name="resetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity"></a>

```typescript
public resetCaseInsensitivity(): void
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists"></a>

```typescript
public resetIfNotExists(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition">addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput">additionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput">caseInsensitivityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addition`<sup>Required</sup> <a name="addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```typescript
public readonly addition: TagPipelineRulesetRulesQueryAdditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `additionInput`<sup>Optional</sup> <a name="additionInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput"></a>

```typescript
public readonly additionInput: IResolvable | TagPipelineRulesetRulesQueryAddition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `caseInsensitivityInput`<sup>Optional</sup> <a name="caseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput"></a>

```typescript
public readonly caseInsensitivityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput"></a>

```typescript
public readonly ifNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```typescript
public readonly caseInsensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---


### TagPipelineRulesetRulesReferenceTableFieldPairsList <a name="TagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```typescript
public get(index: number): TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesReferenceTableFieldPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---


### TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn">resetInputColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey">resetOutputKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputColumn` <a name="resetInputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn"></a>

```typescript
public resetInputColumn(): void
```

##### `resetOutputKey` <a name="resetOutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey"></a>

```typescript
public resetOutputKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput">inputColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput">outputKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">inputColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">outputKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputColumnInput`<sup>Optional</sup> <a name="inputColumnInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput"></a>

```typescript
public readonly inputColumnInput: string;
```

- *Type:* string

---

##### `outputKeyInput`<sup>Optional</sup> <a name="outputKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput"></a>

```typescript
public readonly outputKeyInput: string;
```

- *Type:* string

---

##### `inputColumn`<sup>Required</sup> <a name="inputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```typescript
public readonly inputColumn: string;
```

- *Type:* string

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```typescript
public readonly outputKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesReferenceTableFieldPairs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>

---


### TagPipelineRulesetRulesReferenceTableOutputReference <a name="TagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```typescript
import { tagPipelineRuleset } from '@cdktf/provider-datadog'

new tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">putFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity">resetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">resetFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys">resetSourceKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldPairs` <a name="putFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```typescript
public putFieldPairs(value: IResolvable | TagPipelineRulesetRulesReferenceTableFieldPairs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `resetCaseInsensitivity` <a name="resetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity"></a>

```typescript
public resetCaseInsensitivity(): void
```

##### `resetFieldPairs` <a name="resetFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```typescript
public resetFieldPairs(): void
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists"></a>

```typescript
public resetIfNotExists(): void
```

##### `resetSourceKeys` <a name="resetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys"></a>

```typescript
public resetSourceKeys(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">fieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput">caseInsensitivityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">fieldPairsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput">sourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">caseInsensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">sourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPairs`<sup>Required</sup> <a name="fieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```typescript
public readonly fieldPairs: TagPipelineRulesetRulesReferenceTableFieldPairsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `caseInsensitivityInput`<sup>Optional</sup> <a name="caseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput"></a>

```typescript
public readonly caseInsensitivityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldPairsInput`<sup>Optional</sup> <a name="fieldPairsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```typescript
public readonly fieldPairsInput: IResolvable | TagPipelineRulesetRulesReferenceTableFieldPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs">TagPipelineRulesetRulesReferenceTableFieldPairs</a>[]

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput"></a>

```typescript
public readonly ifNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceKeysInput`<sup>Optional</sup> <a name="sourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput"></a>

```typescript
public readonly sourceKeysInput: string[];
```

- *Type:* string[]

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `caseInsensitivity`<sup>Required</sup> <a name="caseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```typescript
public readonly caseInsensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceKeys`<sup>Required</sup> <a name="sourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```typescript
public readonly sourceKeys: string[];
```

- *Type:* string[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagPipelineRulesetRulesReferenceTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---



