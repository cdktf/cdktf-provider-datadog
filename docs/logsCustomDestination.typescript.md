# `logsCustomDestination` Submodule <a name="`logsCustomDestination` Submodule" id="@cdktf/provider-datadog.logsCustomDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsCustomDestination <a name="LogsCustomDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination datadog_logs_custom_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestination(scope: Construct, id: string, config: LogsCustomDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig">LogsCustomDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig">LogsCustomDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination">putElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination">putHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination">putMicrosoftSentinelDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination">putSplunkDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination">resetElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags">resetForwardTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList">resetForwardTagsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType">resetForwardTagsRestrictionListType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination">resetHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination">resetMicrosoftSentinelDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination">resetSplunkDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticsearchDestination` <a name="putElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination"></a>

```typescript
public putElasticsearchDestination(value: IResolvable | LogsCustomDestinationElasticsearchDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]

---

##### `putHttpDestination` <a name="putHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination"></a>

```typescript
public putHttpDestination(value: IResolvable | LogsCustomDestinationHttpDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]

---

##### `putMicrosoftSentinelDestination` <a name="putMicrosoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination"></a>

```typescript
public putMicrosoftSentinelDestination(value: IResolvable | LogsCustomDestinationMicrosoftSentinelDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]

---

##### `putSplunkDestination` <a name="putSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination"></a>

```typescript
public putSplunkDestination(value: IResolvable | LogsCustomDestinationSplunkDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]

---

##### `resetElasticsearchDestination` <a name="resetElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination"></a>

```typescript
public resetElasticsearchDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetForwardTags` <a name="resetForwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags"></a>

```typescript
public resetForwardTags(): void
```

##### `resetForwardTagsRestrictionList` <a name="resetForwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList"></a>

```typescript
public resetForwardTagsRestrictionList(): void
```

##### `resetForwardTagsRestrictionListType` <a name="resetForwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType"></a>

```typescript
public resetForwardTagsRestrictionListType(): void
```

##### `resetHttpDestination` <a name="resetHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination"></a>

```typescript
public resetHttpDestination(): void
```

##### `resetMicrosoftSentinelDestination` <a name="resetMicrosoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination"></a>

```typescript
public resetMicrosoftSentinelDestination(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSplunkDestination` <a name="resetSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination"></a>

```typescript
public resetSplunkDestination(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

logsCustomDestination.LogsCustomDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

logsCustomDestination.LogsCustomDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

logsCustomDestination.LogsCustomDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

logsCustomDestination.LogsCustomDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsCustomDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsCustomDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsCustomDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination">elasticsearchDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination">httpDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination">microsoftSentinelDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination">splunkDestination</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput">elasticsearchDestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput">forwardTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput">forwardTagsRestrictionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput">forwardTagsRestrictionListTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput">httpDestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput">microsoftSentinelDestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput">splunkDestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags">forwardTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList">forwardTagsRestrictionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType">forwardTagsRestrictionListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query">query</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticsearchDestination`<sup>Required</sup> <a name="elasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination"></a>

```typescript
public readonly elasticsearchDestination: LogsCustomDestinationElasticsearchDestinationList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a>

---

##### `httpDestination`<sup>Required</sup> <a name="httpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination"></a>

```typescript
public readonly httpDestination: LogsCustomDestinationHttpDestinationList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `microsoftSentinelDestination`<sup>Required</sup> <a name="microsoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination"></a>

```typescript
public readonly microsoftSentinelDestination: LogsCustomDestinationMicrosoftSentinelDestinationList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a>

---

##### `splunkDestination`<sup>Required</sup> <a name="splunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination"></a>

```typescript
public readonly splunkDestination: LogsCustomDestinationSplunkDestinationList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a>

---

##### `elasticsearchDestinationInput`<sup>Optional</sup> <a name="elasticsearchDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput"></a>

```typescript
public readonly elasticsearchDestinationInput: IResolvable | LogsCustomDestinationElasticsearchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardTagsInput`<sup>Optional</sup> <a name="forwardTagsInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput"></a>

```typescript
public readonly forwardTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardTagsRestrictionListInput`<sup>Optional</sup> <a name="forwardTagsRestrictionListInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput"></a>

```typescript
public readonly forwardTagsRestrictionListInput: string[];
```

- *Type:* string[]

---

##### `forwardTagsRestrictionListTypeInput`<sup>Optional</sup> <a name="forwardTagsRestrictionListTypeInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput"></a>

```typescript
public readonly forwardTagsRestrictionListTypeInput: string;
```

- *Type:* string

---

##### `httpDestinationInput`<sup>Optional</sup> <a name="httpDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput"></a>

```typescript
public readonly httpDestinationInput: IResolvable | LogsCustomDestinationHttpDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]

---

##### `microsoftSentinelDestinationInput`<sup>Optional</sup> <a name="microsoftSentinelDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput"></a>

```typescript
public readonly microsoftSentinelDestinationInput: IResolvable | LogsCustomDestinationMicrosoftSentinelDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `splunkDestinationInput`<sup>Optional</sup> <a name="splunkDestinationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput"></a>

```typescript
public readonly splunkDestinationInput: IResolvable | LogsCustomDestinationSplunkDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardTags`<sup>Required</sup> <a name="forwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags"></a>

```typescript
public readonly forwardTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardTagsRestrictionList`<sup>Required</sup> <a name="forwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList"></a>

```typescript
public readonly forwardTagsRestrictionList: string[];
```

- *Type:* string[]

---

##### `forwardTagsRestrictionListType`<sup>Required</sup> <a name="forwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType"></a>

```typescript
public readonly forwardTagsRestrictionListType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsCustomDestinationConfig <a name="LogsCustomDestinationConfig" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationConfig: logsCustomDestination.LogsCustomDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name">name</a></code> | <code>string</code> | The custom destination name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination">elasticsearchDestination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]</code> | elasticsearch_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags">forwardTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList">forwardTagsRestrictionList</a></code> | <code>string[]</code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType">forwardTagsRestrictionListType</a></code> | <code>string</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination">httpDestination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]</code> | http_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination">microsoftSentinelDestination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]</code> | microsoft_sentinel_destination block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query">query</a></code> | <code>string</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination">splunkDestination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]</code> | splunk_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `elasticsearchDestination`<sup>Optional</sup> <a name="elasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination"></a>

```typescript
public readonly elasticsearchDestination: IResolvable | LogsCustomDestinationElasticsearchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `forwardTags`<sup>Optional</sup> <a name="forwardTags" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags"></a>

```typescript
public readonly forwardTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `forwardTagsRestrictionList`<sup>Optional</sup> <a name="forwardTagsRestrictionList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList"></a>

```typescript
public readonly forwardTagsRestrictionList: string[];
```

- *Type:* string[]

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `forwardTagsRestrictionListType`<sup>Optional</sup> <a name="forwardTagsRestrictionListType" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType"></a>

```typescript
public readonly forwardTagsRestrictionListType: string;
```

- *Type:* string

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
				are forwarded.
				`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `httpDestination`<sup>Optional</sup> <a name="httpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination"></a>

```typescript
public readonly httpDestination: IResolvable | LogsCustomDestinationHttpDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `microsoftSentinelDestination`<sup>Optional</sup> <a name="microsoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination"></a>

```typescript
public readonly microsoftSentinelDestination: IResolvable | LogsCustomDestinationMicrosoftSentinelDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]

microsoft_sentinel_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#microsoft_sentinel_destination LogsCustomDestination#microsoft_sentinel_destination}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `splunkDestination`<sup>Optional</sup> <a name="splunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination"></a>

```typescript
public readonly splunkDestination: IResolvable | LogsCustomDestinationSplunkDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

### LogsCustomDestinationElasticsearchDestination <a name="LogsCustomDestinationElasticsearchDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationElasticsearchDestination: logsCustomDestination.LogsCustomDestinationElasticsearchDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint">endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName">indexName</a></code> | <code>string</code> | Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)). |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth">basicAuth</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation">indexRotation</a></code> | <code>string</code> | Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}'). |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#index_name LogsCustomDestination#index_name}

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth"></a>

```typescript
public readonly basicAuth: IResolvable | LogsCustomDestinationElasticsearchDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `indexRotation`<sup>Optional</sup> <a name="indexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation"></a>

```typescript
public readonly indexRotation: string;
```

- *Type:* string

Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}').

You can customize the index rotation naming pattern by choosing one of these options:
							- Hourly: 'yyyy-MM-dd-HH' (as an example, it would render: '2022-10-19-09')
							- Daily: 'yyyy-MM-dd' (as an example, it would render: '2022-10-19')
							- Weekly: 'yyyy-'W'ww' (as an example, it would render: '2022-W42')
							- Monthly: 'yyyy-MM' (as an example, it would render: '2022-10')
							If this field is missing or is blank, it means that the index name will always be the same
							(that is, no rotation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#index_rotation LogsCustomDestination#index_rotation}

---

### LogsCustomDestinationElasticsearchDestinationBasicAuth <a name="LogsCustomDestinationElasticsearchDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationElasticsearchDestinationBasicAuth: logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password">password</a></code> | <code>string</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username">username</a></code> | <code>string</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestination <a name="LogsCustomDestinationHttpDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationHttpDestination: logsCustomDestination.LogsCustomDestinationHttpDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint">endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth">basicAuth</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]</code> | basic_auth block. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth">customHeaderAuth</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]</code> | custom_header_auth block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth"></a>

```typescript
public readonly basicAuth: IResolvable | LogsCustomDestinationHttpDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `customHeaderAuth`<sup>Optional</sup> <a name="customHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth"></a>

```typescript
public readonly customHeaderAuth: IResolvable | LogsCustomDestinationHttpDestinationCustomHeaderAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]

custom_header_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#custom_header_auth LogsCustomDestination#custom_header_auth}

---

### LogsCustomDestinationHttpDestinationBasicAuth <a name="LogsCustomDestinationHttpDestinationBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationHttpDestinationBasicAuth: logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password">password</a></code> | <code>string</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username">username</a></code> | <code>string</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestinationCustomHeaderAuth <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationHttpDestinationCustomHeaderAuth: logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName">headerName</a></code> | <code>string</code> | The header name of the authentication. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue">headerValue</a></code> | <code>string</code> | The header value of the authentication. This field is not returned by the API. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The header name of the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#header_name LogsCustomDestination#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

The header value of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#header_value LogsCustomDestination#header_value}

---

### LogsCustomDestinationMicrosoftSentinelDestination <a name="LogsCustomDestinationMicrosoftSentinelDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationMicrosoftSentinelDestination: logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId">clientId</a></code> | <code>string</code> | Client ID from the Datadog Azure Integration. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint">dataCollectionEndpoint</a></code> | <code>string</code> | Azure Data Collection Endpoint. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>string</code> | Azure Data Collection Rule ID. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName">streamName</a></code> | <code>string</code> | Azure stream name. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId">tenantId</a></code> | <code>string</code> | Tenant ID from the Datadog Azure Integration. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#client_id LogsCustomDestination#client_id}

---

##### `dataCollectionEndpoint`<sup>Required</sup> <a name="dataCollectionEndpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint"></a>

```typescript
public readonly dataCollectionEndpoint: string;
```

- *Type:* string

Azure Data Collection Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#data_collection_endpoint LogsCustomDestination#data_collection_endpoint}

---

##### `dataCollectionRuleId`<sup>Required</sup> <a name="dataCollectionRuleId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId"></a>

```typescript
public readonly dataCollectionRuleId: string;
```

- *Type:* string

Azure Data Collection Rule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#data_collection_rule_id LogsCustomDestination#data_collection_rule_id}

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Azure stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#stream_name LogsCustomDestination#stream_name}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Tenant ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#tenant_id LogsCustomDestination#tenant_id}

---

### LogsCustomDestinationSplunkDestination <a name="LogsCustomDestinationSplunkDestination" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

const logsCustomDestinationSplunkDestination: logsCustomDestination.LogsCustomDestinationSplunkDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken">accessToken</a></code> | <code>string</code> | Access token of the Splunk HTTP Event Collector. This field is not returned by the API. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint">endpoint</a></code> | <code>string</code> | The destination for which logs will be forwarded to. |

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Access token of the Splunk HTTP Event Collector. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#access_token LogsCustomDestination#access_token}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsCustomDestinationElasticsearchDestinationBasicAuthList <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationElasticsearchDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]

---


### LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationElasticsearchDestinationBasicAuth;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>

---


### LogsCustomDestinationElasticsearchDestinationList <a name="LogsCustomDestinationElasticsearchDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationElasticsearchDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationElasticsearchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>[]

---


### LogsCustomDestinationElasticsearchDestinationOutputReference <a name="LogsCustomDestinationElasticsearchDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation">resetIndexRotation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: IResolvable | LogsCustomDestinationElasticsearchDestinationBasicAuth[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```

##### `resetIndexRotation` <a name="resetIndexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation"></a>

```typescript
public resetIndexRotation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput">indexRotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation">indexRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: LogsCustomDestinationElasticsearchDestinationBasicAuthList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: IResolvable | LogsCustomDestinationElasticsearchDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>[]

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `indexRotationInput`<sup>Optional</sup> <a name="indexRotationInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput"></a>

```typescript
public readonly indexRotationInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `indexRotation`<sup>Required</sup> <a name="indexRotation" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation"></a>

```typescript
public readonly indexRotation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationElasticsearchDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>

---


### LogsCustomDestinationHttpDestinationBasicAuthList <a name="LogsCustomDestinationHttpDestinationBasicAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationHttpDestinationBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]

---


### LogsCustomDestinationHttpDestinationBasicAuthOutputReference <a name="LogsCustomDestinationHttpDestinationBasicAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestinationBasicAuth;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthList <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestinationCustomHeaderAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestinationCustomHeaderAuth;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>

---


### LogsCustomDestinationHttpDestinationList <a name="LogsCustomDestinationHttpDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationHttpDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>[]

---


### LogsCustomDestinationHttpDestinationOutputReference <a name="LogsCustomDestinationHttpDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth">putCustomHeaderAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth">resetCustomHeaderAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth"></a>

```typescript
public putBasicAuth(value: IResolvable | LogsCustomDestinationHttpDestinationBasicAuth[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]

---

##### `putCustomHeaderAuth` <a name="putCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth"></a>

```typescript
public putCustomHeaderAuth(value: IResolvable | LogsCustomDestinationHttpDestinationCustomHeaderAuth[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth"></a>

```typescript
public resetBasicAuth(): void
```

##### `resetCustomHeaderAuth` <a name="resetCustomHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth"></a>

```typescript
public resetCustomHeaderAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth">customHeaderAuth</a></code> | <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput">customHeaderAuthInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth"></a>

```typescript
public readonly basicAuth: LogsCustomDestinationHttpDestinationBasicAuthList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a>

---

##### `customHeaderAuth`<sup>Required</sup> <a name="customHeaderAuth" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth"></a>

```typescript
public readonly customHeaderAuth: LogsCustomDestinationHttpDestinationCustomHeaderAuthList;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput"></a>

```typescript
public readonly basicAuthInput: IResolvable | LogsCustomDestinationHttpDestinationBasicAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>[]

---

##### `customHeaderAuthInput`<sup>Optional</sup> <a name="customHeaderAuthInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput"></a>

```typescript
public readonly customHeaderAuthInput: IResolvable | LogsCustomDestinationHttpDestinationCustomHeaderAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>[]

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationHttpDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>

---


### LogsCustomDestinationMicrosoftSentinelDestinationList <a name="LogsCustomDestinationMicrosoftSentinelDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationMicrosoftSentinelDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationMicrosoftSentinelDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>[]

---


### LogsCustomDestinationMicrosoftSentinelDestinationOutputReference <a name="LogsCustomDestinationMicrosoftSentinelDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput">dataCollectionEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput">dataCollectionRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint">dataCollectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `dataCollectionEndpointInput`<sup>Optional</sup> <a name="dataCollectionEndpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput"></a>

```typescript
public readonly dataCollectionEndpointInput: string;
```

- *Type:* string

---

##### `dataCollectionRuleIdInput`<sup>Optional</sup> <a name="dataCollectionRuleIdInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput"></a>

```typescript
public readonly dataCollectionRuleIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `dataCollectionEndpoint`<sup>Required</sup> <a name="dataCollectionEndpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint"></a>

```typescript
public readonly dataCollectionEndpoint: string;
```

- *Type:* string

---

##### `dataCollectionRuleId`<sup>Required</sup> <a name="dataCollectionRuleId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId"></a>

```typescript
public readonly dataCollectionRuleId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationMicrosoftSentinelDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>

---


### LogsCustomDestinationSplunkDestinationList <a name="LogsCustomDestinationSplunkDestinationList" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationSplunkDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get"></a>

```typescript
public get(index: number): LogsCustomDestinationSplunkDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationSplunkDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>[]

---


### LogsCustomDestinationSplunkDestinationOutputReference <a name="LogsCustomDestinationSplunkDestinationOutputReference" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer"></a>

```typescript
import { logsCustomDestination } from '@cdktf/provider-datadog'

new logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsCustomDestinationSplunkDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>

---



