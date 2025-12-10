# `agentlessScanningGcpScanOptions` Submodule <a name="`agentlessScanningGcpScanOptions` Submodule" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningGcpScanOptions <a name="AgentlessScanningGcpScanOptions" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

new agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions(scope: Construct, id: string, config: AgentlessScanningGcpScanOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig">AgentlessScanningGcpScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig">AgentlessScanningGcpScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AgentlessScanningGcpScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AgentlessScanningGcpScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AgentlessScanningGcpScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput">vulnContainersOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput">vulnHostOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput"></a>

```typescript
public readonly gcpProjectIdInput: string;
```

- *Type:* string

---

##### `vulnContainersOsInput`<sup>Optional</sup> <a name="vulnContainersOsInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput"></a>

```typescript
public readonly vulnContainersOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnHostOsInput`<sup>Optional</sup> <a name="vulnHostOsInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput"></a>

```typescript
public readonly vulnHostOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningGcpScanOptionsConfig <a name="AgentlessScanningGcpScanOptionsConfig" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.Initializer"></a>

```typescript
import { agentlessScanningGcpScanOptions } from '@cdktf/provider-datadog'

const agentlessScanningGcpScanOptionsConfig: agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs">vulnContainersOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs">vulnHostOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `vulnContainersOs`<sup>Required</sup> <a name="vulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs"></a>

```typescript
public readonly vulnContainersOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `vulnHostOs`<sup>Required</sup> <a name="vulnHostOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs"></a>

```typescript
public readonly vulnHostOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---



