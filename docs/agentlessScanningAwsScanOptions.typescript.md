# `agentlessScanningAwsScanOptions` Submodule <a name="`agentlessScanningAwsScanOptions` Submodule" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAwsScanOptions <a name="AgentlessScanningAwsScanOptions" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

new agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions(scope: Construct, id: string, config: AgentlessScanningAwsScanOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig">AgentlessScanningAwsScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentlessScanningAwsScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentlessScanningAwsScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAwsScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput">lambdaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput">sensitiveDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput">vulnContainersOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput">vulnHostOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda">lambda</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData">sensitiveData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveDataInput`<sup>Optional</sup> <a name="sensitiveDataInput" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput"></a>

```typescript
public readonly sensitiveDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnContainersOsInput`<sup>Optional</sup> <a name="vulnContainersOsInput" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput"></a>

```typescript
public readonly vulnContainersOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnHostOsInput`<sup>Optional</sup> <a name="vulnHostOsInput" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput"></a>

```typescript
public readonly vulnHostOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda"></a>

```typescript
public readonly lambda: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveData`<sup>Required</sup> <a name="sensitiveData" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData"></a>

```typescript
public readonly sensitiveData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAwsScanOptionsConfig <a name="AgentlessScanningAwsScanOptionsConfig" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.Initializer"></a>

```typescript
import { agentlessScanningAwsScanOptions } from '@cdktf/provider-datadog'

const agentlessScanningAwsScanOptionsConfig: agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda">lambda</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning of Lambda functions is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData">sensitiveData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning for sensitive data is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda"></a>

```typescript
public readonly lambda: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning of Lambda functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}

---

##### `sensitiveData`<sup>Required</sup> <a name="sensitiveData" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData"></a>

```typescript
public readonly sensitiveData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning for sensitive data is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}

---



