# `workflowAutomation` Submodule <a name="`workflowAutomation` Submodule" id="@cdktf/provider-datadog.workflowAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowAutomation <a name="WorkflowAutomation" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation datadog_workflow_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

new workflowAutomation.WorkflowAutomation(scope: Construct, id: string, config: WorkflowAutomationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig">WorkflowAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig">WorkflowAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret">resetWebhookSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetWebhookSecret` <a name="resetWebhookSecret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret"></a>

```typescript
public resetWebhookSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkflowAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

workflowAutomation.WorkflowAutomation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

workflowAutomation.WorkflowAutomation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

workflowAutomation.WorkflowAutomation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

workflowAutomation.WorkflowAutomation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkflowAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkflowAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkflowAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput">publishedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput">specJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput">webhookSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.published">published</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson">specJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret">webhookSecret</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput"></a>

```typescript
public readonly publishedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `specJsonInput`<sup>Optional</sup> <a name="specJsonInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput"></a>

```typescript
public readonly specJsonInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `webhookSecretInput`<sup>Optional</sup> <a name="webhookSecretInput" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput"></a>

```typescript
public readonly webhookSecretInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.published"></a>

```typescript
public readonly published: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `specJson`<sup>Required</sup> <a name="specJson" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson"></a>

```typescript
public readonly specJson: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowAutomationConfig <a name="WorkflowAutomationConfig" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.Initializer"></a>

```typescript
import { workflowAutomation } from '@cdktf/provider-datadog'

const workflowAutomationConfig: workflowAutomation.WorkflowAutomationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description">description</a></code> | <code>string</code> | Description of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name">name</a></code> | <code>string</code> | Name of the workflow. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published">published</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the workflow to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson">specJson</a></code> | <code>string</code> | The spec defines what the workflow does. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret">webhookSecret</a></code> | <code>string</code> | If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#description WorkflowAutomation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the workflow. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#name WorkflowAutomation#name}

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published"></a>

```typescript
public readonly published: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the workflow to published or unpublished.

Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#published WorkflowAutomation#published}

---

##### `specJson`<sup>Required</sup> <a name="specJson" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson"></a>

```typescript
public readonly specJson: string;
```

- *Type:* string

The spec defines what the workflow does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: string;
```

- *Type:* string

If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here.

String length must be at least 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}

---



