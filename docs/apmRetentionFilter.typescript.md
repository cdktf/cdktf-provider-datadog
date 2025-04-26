# `apmRetentionFilter` Submodule <a name="`apmRetentionFilter` Submodule" id="@cdktf/provider-datadog.apmRetentionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmRetentionFilter <a name="ApmRetentionFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter datadog_apm_retention_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

new apmRetentionFilter.ApmRetentionFilter(scope: Construct, id: string, config: ApmRetentionFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig">ApmRetentionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig">ApmRetentionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetTraceRate">resetTraceRate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter"></a>

```typescript
public putFilter(value: ApmRetentionFilterFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetTraceRate` <a name="resetTraceRate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetTraceRate"></a>

```typescript
public resetTraceRate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmRetentionFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

apmRetentionFilter.ApmRetentionFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

apmRetentionFilter.ApmRetentionFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

apmRetentionFilter.ApmRetentionFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

apmRetentionFilter.ApmRetentionFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApmRetentionFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmRetentionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmRetentionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmRetentionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput">rateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRateInput">traceRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate">rate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRate">traceRate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter"></a>

```typescript
public readonly filter: ApmRetentionFilterFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | ApmRetentionFilterFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput"></a>

```typescript
public readonly rateInput: string;
```

- *Type:* string

---

##### `traceRateInput`<sup>Optional</sup> <a name="traceRateInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRateInput"></a>

```typescript
public readonly traceRateInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

---

##### `traceRate`<sup>Required</sup> <a name="traceRate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRate"></a>

```typescript
public readonly traceRate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmRetentionFilterConfig <a name="ApmRetentionFilterConfig" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.Initializer"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

const apmRetentionFilterConfig: apmRetentionFilter.ApmRetentionFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | the status of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType">filterType</a></code> | <code>string</code> | The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name">name</a></code> | <code>string</code> | The name of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate">rate</a></code> | <code>string</code> | Sample rate to apply to spans going through this retention filter as a string; |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.traceRate">traceRate</a></code> | <code>string</code> | Sample rate to apply to traces with spans going through this retention filter as a string; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

the status of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate"></a>

```typescript
public readonly rate: string;
```

- *Type:* string

Sample rate to apply to spans going through this retention filter as a string;

a value of 1.0 keeps all spans matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter"></a>

```typescript
public readonly filter: ApmRetentionFilterFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}

---

##### `traceRate`<sup>Optional</sup> <a name="traceRate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.traceRate"></a>

```typescript
public readonly traceRate: string;
```

- *Type:* string

Sample rate to apply to traces with spans going through this retention filter as a string;

a value of 1.0 keeps all traces matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#trace_rate ApmRetentionFilter#trace_rate}

---

### ApmRetentionFilterFilter <a name="ApmRetentionFilterFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.Initializer"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

const apmRetentionFilterFilter: apmRetentionFilter.ApmRetentionFilterFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query">query</a></code> | <code>string</code> | The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration.

Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/apm_retention_filter#query ApmRetentionFilter#query}

---

## Classes <a name="Classes" id="Classes"></a>

### ApmRetentionFilterFilterOutputReference <a name="ApmRetentionFilterFilterOutputReference" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer"></a>

```typescript
import { apmRetentionFilter } from '@cdktf/provider-datadog'

new apmRetentionFilter.ApmRetentionFilterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmRetentionFilterFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---



