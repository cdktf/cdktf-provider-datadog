# `apmRetentionFilterOrder` Submodule <a name="`apmRetentionFilterOrder` Submodule" id="@cdktf/provider-datadog.apmRetentionFilterOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmRetentionFilterOrder <a name="ApmRetentionFilterOrder" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/apm_retention_filter_order datadog_apm_retention_filter_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

new apmRetentionFilterOrder.ApmRetentionFilterOrder(scope: Construct, id: string, config: ApmRetentionFilterOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig">ApmRetentionFilterOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig">ApmRetentionFilterOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmRetentionFilterOrder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isConstruct"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

apmRetentionFilterOrder.ApmRetentionFilterOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformElement"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformResource"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApmRetentionFilterOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmRetentionFilterOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmRetentionFilterOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/apm_retention_filter_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmRetentionFilterOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.filterIdsInput">filterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.filterIds">filterIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `filterIdsInput`<sup>Optional</sup> <a name="filterIdsInput" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.filterIdsInput"></a>

```typescript
public readonly filterIdsInput: string[];
```

- *Type:* string[]

---

##### `filterIds`<sup>Required</sup> <a name="filterIds" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.filterIds"></a>

```typescript
public readonly filterIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmRetentionFilterOrderConfig <a name="ApmRetentionFilterOrderConfig" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.Initializer"></a>

```typescript
import { apmRetentionFilterOrder } from '@cdktf/provider-datadog'

const apmRetentionFilterOrderConfig: apmRetentionFilterOrder.ApmRetentionFilterOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.filterIds">filterIds</a></code> | <code>string[]</code> | The filter IDs list. The order of filters IDs in this attribute defines the overall APM retention filters order. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterIds`<sup>Required</sup> <a name="filterIds" id="@cdktf/provider-datadog.apmRetentionFilterOrder.ApmRetentionFilterOrderConfig.property.filterIds"></a>

```typescript
public readonly filterIds: string[];
```

- *Type:* string[]

The filter IDs list. The order of filters IDs in this attribute defines the overall APM retention filters order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/apm_retention_filter_order#filter_ids ApmRetentionFilterOrder#filter_ids}

---



