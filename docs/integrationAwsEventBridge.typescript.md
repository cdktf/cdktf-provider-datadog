# `integrationAwsEventBridge` Submodule <a name="`integrationAwsEventBridge` Submodule" id="@cdktf/provider-datadog.integrationAwsEventBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsEventBridge <a name="IntegrationAwsEventBridge" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge datadog_integration_aws_event_bridge}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

new integrationAwsEventBridge.IntegrationAwsEventBridge(scope: Construct, id: string, config: IntegrationAwsEventBridgeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig">IntegrationAwsEventBridgeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig">IntegrationAwsEventBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus">resetCreateEventBus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreateEventBus` <a name="resetCreateEventBus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus"></a>

```typescript
public resetCreateEventBus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsEventBridge resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationAwsEventBridge resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAwsEventBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAwsEventBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsEventBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput">createEventBusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput">eventGeneratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus">createEventBus</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName">eventGeneratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `createEventBusInput`<sup>Optional</sup> <a name="createEventBusInput" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput"></a>

```typescript
public readonly createEventBusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventGeneratorNameInput`<sup>Optional</sup> <a name="eventGeneratorNameInput" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput"></a>

```typescript
public readonly eventGeneratorNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `createEventBus`<sup>Required</sup> <a name="createEventBus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus"></a>

```typescript
public readonly createEventBus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventGeneratorName`<sup>Required</sup> <a name="eventGeneratorName" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName"></a>

```typescript
public readonly eventGeneratorName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsEventBridgeConfig <a name="IntegrationAwsEventBridgeConfig" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.Initializer"></a>

```typescript
import { integrationAwsEventBridge } from '@cdktf/provider-datadog'

const integrationAwsEventBridgeConfig: integrationAwsEventBridge.IntegrationAwsEventBridgeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId">accountId</a></code> | <code>string</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName">eventGeneratorName</a></code> | <code>string</code> | The given part of the event source name, which is then combined with an assigned suffix to form the full name. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region">region</a></code> | <code>string</code> | The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus">createEventBus</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if Datadog should create the event bus in addition to the event source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}

---

##### `eventGeneratorName`<sup>Required</sup> <a name="eventGeneratorName" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName"></a>

```typescript
public readonly eventGeneratorName: string;
```

- *Type:* string

The given part of the event source name, which is then combined with an assigned suffix to form the full name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}

---

##### `createEventBus`<sup>Optional</sup> <a name="createEventBus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus"></a>

```typescript
public readonly createEventBus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if Datadog should create the event bus in addition to the event source.

Requires the `events:CreateEventBus` permission. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}

---



