# `integrationGcp` Submodule <a name="`integrationGcp` Submodule" id="@cdktf/provider-datadog.integrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcp <a name="IntegrationGcp" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp datadog_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

new integrationGcp.IntegrationGcp(scope: Construct, id: string, config: IntegrationGcpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig">IntegrationGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig">IntegrationGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs">putMonitoredResourceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute">resetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCloudRunRevisionFilters">resetCloudRunRevisionFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled">resetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters">resetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsResourceChangeCollectionEnabled">resetIsResourceChangeCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsSecurityCommandCenterEnabled">resetIsSecurityCommandCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetMonitoredResourceConfigs">resetMonitoredResourceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitoredResourceConfigs` <a name="putMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs"></a>

```typescript
public putMonitoredResourceConfigs(value: IResolvable | IntegrationGcpMonitoredResourceConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]

---

##### `resetAutomute` <a name="resetAutomute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute"></a>

```typescript
public resetAutomute(): void
```

##### `resetCloudRunRevisionFilters` <a name="resetCloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCloudRunRevisionFilters"></a>

```typescript
public resetCloudRunRevisionFilters(): void
```

##### `resetCspmResourceCollectionEnabled` <a name="resetCspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled"></a>

```typescript
public resetCspmResourceCollectionEnabled(): void
```

##### `resetHostFilters` <a name="resetHostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters"></a>

```typescript
public resetHostFilters(): void
```

##### `resetIsResourceChangeCollectionEnabled` <a name="resetIsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsResourceChangeCollectionEnabled"></a>

```typescript
public resetIsResourceChangeCollectionEnabled(): void
```

##### `resetIsSecurityCommandCenterEnabled` <a name="resetIsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsSecurityCommandCenterEnabled"></a>

```typescript
public resetIsSecurityCommandCenterEnabled(): void
```

##### `resetMonitoredResourceConfigs` <a name="resetMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetMonitoredResourceConfigs"></a>

```typescript
public resetMonitoredResourceConfigs(): void
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetResourceCollectionEnabled"></a>

```typescript
public resetResourceCollectionEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

integrationGcp.IntegrationGcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

integrationGcp.IntegrationGcp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

integrationGcp.IntegrationGcp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

integrationGcp.IntegrationGcp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigs">monitoredResourceConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList">IntegrationGcpMonitoredResourceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput">automuteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFiltersInput">cloudRunRevisionFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput">cspmResourceCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput">hostFiltersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabledInput">isResourceChangeCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabledInput">isSecurityCommandCenterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigsInput">monitoredResourceConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute">automute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters">hostFilters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitoredResourceConfigs`<sup>Required</sup> <a name="monitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigs"></a>

```typescript
public readonly monitoredResourceConfigs: IntegrationGcpMonitoredResourceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList">IntegrationGcpMonitoredResourceConfigsList</a>

---

##### `automuteInput`<sup>Optional</sup> <a name="automuteInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput"></a>

```typescript
public readonly automuteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `cloudRunRevisionFiltersInput`<sup>Optional</sup> <a name="cloudRunRevisionFiltersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFiltersInput"></a>

```typescript
public readonly cloudRunRevisionFiltersInput: string[];
```

- *Type:* string[]

---

##### `cspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="cspmResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput"></a>

```typescript
public readonly cspmResourceCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostFiltersInput`<sup>Optional</sup> <a name="hostFiltersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput"></a>

```typescript
public readonly hostFiltersInput: string;
```

- *Type:* string

---

##### `isResourceChangeCollectionEnabledInput`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabledInput"></a>

```typescript
public readonly isResourceChangeCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabledInput`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabledInput"></a>

```typescript
public readonly isSecurityCommandCenterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoredResourceConfigsInput`<sup>Optional</sup> <a name="monitoredResourceConfigsInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigsInput"></a>

```typescript
public readonly monitoredResourceConfigsInput: IResolvable | IntegrationGcpMonitoredResourceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput"></a>

```typescript
public readonly privateKeyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabledInput"></a>

```typescript
public readonly resourceCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute"></a>

```typescript
public readonly automute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `cloudRunRevisionFilters`<sup>Required</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFilters"></a>

```typescript
public readonly cloudRunRevisionFilters: string[];
```

- *Type:* string[]

---

##### `cspmResourceCollectionEnabled`<sup>Required</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled"></a>

```typescript
public readonly cspmResourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostFilters`<sup>Required</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters"></a>

```typescript
public readonly hostFilters: string;
```

- *Type:* string

---

##### `isResourceChangeCollectionEnabled`<sup>Required</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabled"></a>

```typescript
public readonly isResourceChangeCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabled`<sup>Required</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabled"></a>

```typescript
public readonly isSecurityCommandCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpConfig <a name="IntegrationGcpConfig" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.Initializer"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

const integrationGcpConfig: integrationGcp.IntegrationGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail">clientEmail</a></code> | <code>string</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId">clientId</a></code> | <code>string</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId">projectId</a></code> | <code>string</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute">automute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>string[]</code> | List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters">hostFilters</a></code> | <code>string</code> | List of filters to limit the VM instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog scans for all resource change data in your Google Cloud environment. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.monitoredResourceConfigs">monitoredResourceConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]</code> | Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute"></a>

```typescript
public readonly automute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `cloudRunRevisionFilters`<sup>Optional</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cloudRunRevisionFilters"></a>

```typescript
public readonly cloudRunRevisionFilters: string[];
```

- *Type:* string[]

List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags.

Only Cloud Run revision resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#cloud_run_revision_filters IntegrationGcp#cloud_run_revision_filters}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled"></a>

```typescript
public readonly cspmResourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters"></a>

```typescript
public readonly hostFilters: string;
```

- *Type:* string

List of filters to limit the VM instances that are pulled into Datadog by using tags.

Only VM instance resources that apply to specified filters are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `isResourceChangeCollectionEnabled`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isResourceChangeCollectionEnabled"></a>

```typescript
public readonly isResourceChangeCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog scans for all resource change data in your Google Cloud environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#is_resource_change_collection_enabled IntegrationGcp#is_resource_change_collection_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isSecurityCommandCenterEnabled"></a>

```typescript
public readonly isSecurityCommandCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#is_security_command_center_enabled IntegrationGcp#is_security_command_center_enabled}

---

##### `monitoredResourceConfigs`<sup>Optional</sup> <a name="monitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.monitoredResourceConfigs"></a>

```typescript
public readonly monitoredResourceConfigs: IResolvable | IntegrationGcpMonitoredResourceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]

Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#monitored_resource_configs IntegrationGcp#monitored_resource_configs}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#resource_collection_enabled IntegrationGcp#resource_collection_enabled}

---

### IntegrationGcpMonitoredResourceConfigs <a name="IntegrationGcpMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.Initializer"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

const integrationGcpMonitoredResourceConfigs: integrationGcp.IntegrationGcpMonitoredResourceConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.filters">filters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#filters IntegrationGcp#filters}. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#type IntegrationGcp#type}. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#filters IntegrationGcp#filters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_gcp#type IntegrationGcp#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpMonitoredResourceConfigsList <a name="IntegrationGcpMonitoredResourceConfigsList" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

new integrationGcp.IntegrationGcpMonitoredResourceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get"></a>

```typescript
public get(index: number): IntegrationGcpMonitoredResourceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationGcpMonitoredResourceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>[]

---


### IntegrationGcpMonitoredResourceConfigsOutputReference <a name="IntegrationGcpMonitoredResourceConfigsOutputReference" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer"></a>

```typescript
import { integrationGcp } from '@cdktf/provider-datadog'

new integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filtersInput">filtersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filters">filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filters"></a>

```typescript
public readonly filters: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationGcpMonitoredResourceConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>

---



