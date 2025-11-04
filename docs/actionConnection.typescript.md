# `actionConnection` Submodule <a name="`actionConnection` Submodule" id="@cdktf/provider-datadog.actionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionConnection <a name="ActionConnection" id="@cdktf/provider-datadog.actionConnection.ActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnection(scope: Construct, id: string, config: ActionConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig">ActionConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.actionConnection.ActionConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig">ActionConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.resetHttp">resetHttp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.actionConnection.ActionConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.actionConnection.ActionConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putAws"></a>

```typescript
public putAws(value: ActionConnectionAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp"></a>

```typescript
public putHttp(value: ActionConnectionHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnection.resetHttp"></a>

```typescript
public resetHttp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

actionConnection.ActionConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

actionConnection.ActionConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

actionConnection.ActionConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.actionConnection.ActionConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

actionConnection.ActionConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActionConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.http">http</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.aws"></a>

```typescript
public readonly aws: ActionConnectionAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference">ActionConnectionAwsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.http"></a>

```typescript
public readonly http: ActionConnectionHttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference">ActionConnectionHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.awsInput"></a>

```typescript
public readonly awsInput: ActionConnectionAws | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> | cdktf.IResolvable

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.httpInput"></a>

```typescript
public readonly httpInput: ActionConnectionHttp | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.actionConnection.ActionConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionConnectionAws <a name="ActionConnectionAws" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionAws: actionConnection.ActionConnectionAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a></code> | assume_role block. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAws.property.assumeRole"></a>

```typescript
public readonly assumeRole: ActionConnectionAwsAssumeRole;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#assume_role ActionConnection#assume_role}

---

### ActionConnectionAwsAssumeRole <a name="ActionConnectionAwsAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionAwsAssumeRole: actionConnection.ActionConnectionAwsAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId">accountId</a></code> | <code>string</code> | AWS account that the connection is created for. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role">role</a></code> | <code>string</code> | Role to assume. String length must be at least 1. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

AWS account that the connection is created for. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#account_id ActionConnection#account_id}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Role to assume. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#role ActionConnection#role}

---

### ActionConnectionConfig <a name="ActionConnectionConfig" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionConfig: actionConnection.ActionConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.name">name</a></code> | <code>string</code> | Name of the connection. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.http">http</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a></code> | http block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.aws"></a>

```typescript
public readonly aws: ActionConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#aws ActionConnection#aws}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-datadog.actionConnection.ActionConnectionConfig.property.http"></a>

```typescript
public readonly http: ActionConnectionHttp;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#http ActionConnection#http}

---

### ActionConnectionHttp <a name="ActionConnectionHttp" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttp: actionConnection.ActionConnectionHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl">baseUrl</a></code> | <code>string</code> | Base HTTP url for the integration. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

Base HTTP url for the integration. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#base_url ActionConnection#base_url}

---

##### `tokenAuth`<sup>Optional</sup> <a name="tokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttp.property.tokenAuth"></a>

```typescript
public readonly tokenAuth: ActionConnectionHttpTokenAuth;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#token_auth ActionConnection#token_auth}

---

### ActionConnectionHttpTokenAuth <a name="ActionConnectionHttpTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttpTokenAuth: actionConnection.ActionConnectionHttpTokenAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body">body</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | body block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token">token</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]</code> | token block. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter">urlParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | url_parameter block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.body"></a>

```typescript
public readonly body: ActionConnectionHttpTokenAuthBody;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#body ActionConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.header"></a>

```typescript
public readonly header: IResolvable | ActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#header ActionConnection#header}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.token"></a>

```typescript
public readonly token: IResolvable | ActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#token ActionConnection#token}

---

##### `urlParameter`<sup>Optional</sup> <a name="urlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth.property.urlParameter"></a>

```typescript
public readonly urlParameter: IResolvable | ActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#url_parameter ActionConnection#url_parameter}

---

### ActionConnectionHttpTokenAuthBody <a name="ActionConnectionHttpTokenAuthBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttpTokenAuthBody: actionConnection.ActionConnectionHttpTokenAuthBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content">content</a></code> | <code>string</code> | Serialized body content. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType">contentType</a></code> | <code>string</code> | Content type of the body. String length must be at least 1. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Serialized body content. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#content ActionConnection#content}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Content type of the body. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#content_type ActionConnection#content_type}

---

### ActionConnectionHttpTokenAuthHeader <a name="ActionConnectionHttpTokenAuthHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttpTokenAuthHeader: actionConnection.ActionConnectionHttpTokenAuthHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name">name</a></code> | <code>string</code> | Header name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value">value</a></code> | <code>string</code> | String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Header name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthToken <a name="ActionConnectionHttpTokenAuthToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttpTokenAuthToken: actionConnection.ActionConnectionHttpTokenAuthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name">name</a></code> | <code>string</code> | Token name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type">type</a></code> | <code>string</code> | Token type Valid values are `SECRET`. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value">value</a></code> | <code>string</code> | Token value. String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Token name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Token type Valid values are `SECRET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#type ActionConnection#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Token value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#value ActionConnection#value}

---

### ActionConnectionHttpTokenAuthUrlParameter <a name="ActionConnectionHttpTokenAuthUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

const actionConnectionHttpTokenAuthUrlParameter: actionConnection.ActionConnectionHttpTokenAuthUrlParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name">name</a></code> | <code>string</code> | URL parameter name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value">value</a></code> | <code>string</code> | URL parameter value. String length must be at least 1. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

URL parameter name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#name ActionConnection#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

URL parameter value. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/action_connection#value ActionConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionConnectionAwsAssumeRoleOutputReference <a name="ActionConnectionAwsAssumeRoleOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionAwsAssumeRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionConnectionAwsAssumeRole | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> | cdktf.IResolvable

---


### ActionConnectionAwsOutputReference <a name="ActionConnectionAwsOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole">putAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssumeRole` <a name="putAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole"></a>

```typescript
public putAssumeRole(value: ActionConnectionAwsAssumeRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.putAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a>

---

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRole"></a>

```typescript
public readonly assumeRole: ActionConnectionAwsAssumeRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRoleOutputReference">ActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: ActionConnectionAwsAssumeRole | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAwsAssumeRole">ActionConnectionAwsAssumeRole</a> | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionConnectionAws | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionAws">ActionConnectionAws</a> | cdktf.IResolvable

---


### ActionConnectionHttpOutputReference <a name="ActionConnectionHttpOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth">putTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth">resetTokenAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenAuth` <a name="putTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth"></a>

```typescript
public putTokenAuth(value: ActionConnectionHttpTokenAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetTokenAuth` <a name="resetTokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.resetTokenAuth"></a>

```typescript
public resetTokenAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth">tokenAuth</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput">tokenAuthInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenAuth`<sup>Required</sup> <a name="tokenAuth" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuth"></a>

```typescript
public readonly tokenAuth: ActionConnectionHttpTokenAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference">ActionConnectionHttpTokenAuthOutputReference</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `tokenAuthInput`<sup>Optional</sup> <a name="tokenAuthInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```typescript
public readonly tokenAuthInput: IResolvable | ActionConnectionHttpTokenAuth;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionConnectionHttp | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttp">ActionConnectionHttp</a> | cdktf.IResolvable

---


### ActionConnectionHttpTokenAuthBodyOutputReference <a name="ActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---


### ActionConnectionHttpTokenAuthHeaderList <a name="ActionConnectionHttpTokenAuthHeaderList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get"></a>

```typescript
public get(index: number): ActionConnectionHttpTokenAuthHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]

---


### ActionConnectionHttpTokenAuthHeaderOutputReference <a name="ActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>

---


### ActionConnectionHttpTokenAuthOutputReference <a name="ActionConnectionHttpTokenAuthOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter">putUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">resetUrlParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody"></a>

```typescript
public putBody(value: ActionConnectionHttpTokenAuthBody): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ActionConnectionHttpTokenAuthHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]

---

##### `putToken` <a name="putToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```typescript
public putToken(value: IResolvable | ActionConnectionHttpTokenAuthToken[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]

---

##### `putUrlParameter` <a name="putUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```typescript
public putUrlParameter(value: IResolvable | ActionConnectionHttpTokenAuthUrlParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUrlParameter` <a name="resetUrlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```typescript
public resetUrlParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token">token</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter">urlParameter</a></code> | <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput">tokenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">urlParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```typescript
public readonly body: ActionConnectionHttpTokenAuthBodyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBodyOutputReference">ActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```typescript
public readonly header: ActionConnectionHttpTokenAuthHeaderList;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeaderList">ActionConnectionHttpTokenAuthHeaderList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```typescript
public readonly token: ActionConnectionHttpTokenAuthTokenList;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList">ActionConnectionHttpTokenAuthTokenList</a>

---

##### `urlParameter`<sup>Required</sup> <a name="urlParameter" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```typescript
public readonly urlParameter: ActionConnectionHttpTokenAuthUrlParameterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList">ActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | ActionConnectionHttpTokenAuthBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthBody">ActionConnectionHttpTokenAuthBody</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ActionConnectionHttpTokenAuthHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthHeader">ActionConnectionHttpTokenAuthHeader</a>[]

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: IResolvable | ActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]

---

##### `urlParameterInput`<sup>Optional</sup> <a name="urlParameterInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```typescript
public readonly urlParameterInput: IResolvable | ActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuth;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuth">ActionConnectionHttpTokenAuth</a>

---


### ActionConnectionHttpTokenAuthTokenList <a name="ActionConnectionHttpTokenAuthTokenList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthTokenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get"></a>

```typescript
public get(index: number): ActionConnectionHttpTokenAuthTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthToken[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>[]

---


### ActionConnectionHttpTokenAuthTokenOutputReference <a name="ActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthToken;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthToken">ActionConnectionHttpTokenAuthToken</a>

---


### ActionConnectionHttpTokenAuthUrlParameterList <a name="ActionConnectionHttpTokenAuthUrlParameterList" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthUrlParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```typescript
public get(index: number): ActionConnectionHttpTokenAuthUrlParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthUrlParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>[]

---


### ActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="ActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```typescript
import { actionConnection } from '@cdktf/provider-datadog'

new actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionConnectionHttpTokenAuthUrlParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.actionConnection.ActionConnectionHttpTokenAuthUrlParameter">ActionConnectionHttpTokenAuthUrlParameter</a>

---



