# `integrationOpsgenieServiceObject` Submodule <a name="`integrationOpsgenieServiceObject` Submodule" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOpsgenieServiceObject <a name="IntegrationOpsgenieServiceObject" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

new integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject(scope: Construct, id: string, config: IntegrationOpsgenieServiceObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl">resetCustomUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomUrl` <a name="resetCustomUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl"></a>

```typescript
public resetCustomUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationOpsgenieServiceObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationOpsgenieServiceObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOpsgenieServiceObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput">customUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput">opsgenieApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl">customUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey">opsgenieApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customUrlInput`<sup>Optional</sup> <a name="customUrlInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput"></a>

```typescript
public readonly customUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opsgenieApiKeyInput`<sup>Optional</sup> <a name="opsgenieApiKeyInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput"></a>

```typescript
public readonly opsgenieApiKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `customUrl`<sup>Required</sup> <a name="customUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl"></a>

```typescript
public readonly customUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opsgenieApiKey`<sup>Required</sup> <a name="opsgenieApiKey" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey"></a>

```typescript
public readonly opsgenieApiKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOpsgenieServiceObjectConfig <a name="IntegrationOpsgenieServiceObjectConfig" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.Initializer"></a>

```typescript
import { integrationOpsgenieServiceObject } from '@cdktf/provider-datadog'

const integrationOpsgenieServiceObjectConfig: integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name">name</a></code> | <code>string</code> | The name for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey">opsgenieApiKey</a></code> | <code>string</code> | The Opsgenie API key for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region">region</a></code> | <code>string</code> | The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl">customUrl</a></code> | <code>string</code> | The custom url for a custom region. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the Opsgenie service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}

---

##### `opsgenieApiKey`<sup>Required</sup> <a name="opsgenieApiKey" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey"></a>

```typescript
public readonly opsgenieApiKey: string;
```

- *Type:* string

The Opsgenie API key for the Opsgenie service.

Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}

---

##### `customUrl`<sup>Optional</sup> <a name="customUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl"></a>

```typescript
public readonly customUrl: string;
```

- *Type:* string

The custom url for a custom region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



