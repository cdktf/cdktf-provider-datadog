# `integrationPagerdutyServiceObject` Submodule <a name="`integrationPagerdutyServiceObject` Submodule" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPagerdutyServiceObject <a name="IntegrationPagerdutyServiceObject" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object datadog_integration_pagerduty_service_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

new integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject(scope: Construct, id: string, config: IntegrationPagerdutyServiceObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig">IntegrationPagerdutyServiceObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig">IntegrationPagerdutyServiceObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationPagerdutyServiceObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationPagerdutyServiceObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationPagerdutyServiceObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationPagerdutyServiceObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPagerdutyServiceObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKeyInput">serviceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKeyInput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPagerdutyServiceObjectConfig <a name="IntegrationPagerdutyServiceObjectConfig" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.Initializer"></a>

```typescript
import { integrationPagerdutyServiceObject } from '@cdktf/provider-datadog'

const integrationPagerdutyServiceObjectConfig: integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceKey">serviceKey</a></code> | <code>string</code> | Your Service name associated service key in PagerDuty. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Your Service name in PagerDuty. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object#id IntegrationPagerdutyServiceObject#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

Your Service name associated service key in PagerDuty.

This key may also be referred to as an Integration Key or Routing Key in the Pagerduty Integration [documentation](https://www.pagerduty.com/docs/guides/datadog-integration-guide/), UI, and within the [Pagerduty Provider for Terraform](https://registry.terraform.io/providers/PagerDuty/pagerduty/latest/docs/resources/service_integration#integration_key) Note: Since the Datadog API never returns service keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object#service_key IntegrationPagerdutyServiceObject#service_key}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Your Service name in PagerDuty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object#service_name IntegrationPagerdutyServiceObject#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_pagerduty_service_object#id IntegrationPagerdutyServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



