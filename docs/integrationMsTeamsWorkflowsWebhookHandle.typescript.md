# `integrationMsTeamsWorkflowsWebhookHandle` Submodule <a name="`integrationMsTeamsWorkflowsWebhookHandle` Submodule" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMsTeamsWorkflowsWebhookHandle <a name="IntegrationMsTeamsWorkflowsWebhookHandle" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/integration_ms_teams_workflows_webhook_handle datadog_integration_ms_teams_workflows_webhook_handle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

new integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle(scope: Construct, id: string, config: IntegrationMsTeamsWorkflowsWebhookHandleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig">IntegrationMsTeamsWorkflowsWebhookHandleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig">IntegrationMsTeamsWorkflowsWebhookHandleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMsTeamsWorkflowsWebhookHandle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isConstruct"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformElement"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformResource"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationMsTeamsWorkflowsWebhookHandle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationMsTeamsWorkflowsWebhookHandle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationMsTeamsWorkflowsWebhookHandle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/integration_ms_teams_workflows_webhook_handle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMsTeamsWorkflowsWebhookHandle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMsTeamsWorkflowsWebhookHandleConfig <a name="IntegrationMsTeamsWorkflowsWebhookHandleConfig" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.Initializer"></a>

```typescript
import { integrationMsTeamsWorkflowsWebhookHandle } from '@cdktf/provider-datadog'

const integrationMsTeamsWorkflowsWebhookHandleConfig: integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.name">name</a></code> | <code>string</code> | Your Microsoft Workflows webhook handle name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.url">url</a></code> | <code>string</code> | Your Microsoft Workflows webhook URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Your Microsoft Workflows webhook handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/integration_ms_teams_workflows_webhook_handle#name IntegrationMsTeamsWorkflowsWebhookHandle#name}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.integrationMsTeamsWorkflowsWebhookHandle.IntegrationMsTeamsWorkflowsWebhookHandleConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Your Microsoft Workflows webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/resources/integration_ms_teams_workflows_webhook_handle#url IntegrationMsTeamsWorkflowsWebhookHandle#url}

---



