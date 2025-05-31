# `integrationGcpSts` Submodule <a name="`integrationGcpSts` Submodule" id="@cdktf/provider-datadog.integrationGcpSts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpSts <a name="IntegrationGcpSts" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

new integrationGcpSts.IntegrationGcpSts(scope: Construct, id: string, config: IntegrationGcpStsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig">IntegrationGcpStsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig">IntegrationGcpStsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs">putMetricNamespaceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags">resetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute">resetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetCloudRunRevisionFilters">resetCloudRunRevisionFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters">resetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled">resetIsCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsPerProjectQuotaEnabled">resetIsPerProjectQuotaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsResourceChangeCollectionEnabled">resetIsResourceChangeCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled">resetIsSecurityCommandCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetMetricNamespaceConfigs">resetMetricNamespaceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricNamespaceConfigs` <a name="putMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs"></a>

```typescript
public putMetricNamespaceConfigs(value: IResolvable | IntegrationGcpStsMetricNamespaceConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.putMetricNamespaceConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]

---

##### `resetAccountTags` <a name="resetAccountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags"></a>

```typescript
public resetAccountTags(): void
```

##### `resetAutomute` <a name="resetAutomute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute"></a>

```typescript
public resetAutomute(): void
```

##### `resetCloudRunRevisionFilters` <a name="resetCloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetCloudRunRevisionFilters"></a>

```typescript
public resetCloudRunRevisionFilters(): void
```

##### `resetHostFilters` <a name="resetHostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters"></a>

```typescript
public resetHostFilters(): void
```

##### `resetIsCspmEnabled` <a name="resetIsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled"></a>

```typescript
public resetIsCspmEnabled(): void
```

##### `resetIsPerProjectQuotaEnabled` <a name="resetIsPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsPerProjectQuotaEnabled"></a>

```typescript
public resetIsPerProjectQuotaEnabled(): void
```

##### `resetIsResourceChangeCollectionEnabled` <a name="resetIsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsResourceChangeCollectionEnabled"></a>

```typescript
public resetIsResourceChangeCollectionEnabled(): void
```

##### `resetIsSecurityCommandCenterEnabled` <a name="resetIsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled"></a>

```typescript
public resetIsSecurityCommandCenterEnabled(): void
```

##### `resetMetricNamespaceConfigs` <a name="resetMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetMetricNamespaceConfigs"></a>

```typescript
public resetMetricNamespaceConfigs(): void
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled"></a>

```typescript
public resetResourceCollectionEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

integrationGcpSts.IntegrationGcpSts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

integrationGcpSts.IntegrationGcpSts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

integrationGcpSts.IntegrationGcpSts.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

integrationGcpSts.IntegrationGcpSts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationGcpSts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationGcpSts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcpSts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail">delegateAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigs">metricNamespaceConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList">IntegrationGcpStsMetricNamespaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput">accountTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput">automuteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFiltersInput">cloudRunRevisionFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput">hostFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput">isCspmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabledInput">isPerProjectQuotaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabledInput">isResourceChangeCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput">isSecurityCommandCenterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigsInput">metricNamespaceConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags">accountTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute">automute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters">hostFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled">isCspmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabled">isPerProjectQuotaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegateAccountEmail`<sup>Required</sup> <a name="delegateAccountEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail"></a>

```typescript
public readonly delegateAccountEmail: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricNamespaceConfigs`<sup>Required</sup> <a name="metricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigs"></a>

```typescript
public readonly metricNamespaceConfigs: IntegrationGcpStsMetricNamespaceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList">IntegrationGcpStsMetricNamespaceConfigsList</a>

---

##### `accountTagsInput`<sup>Optional</sup> <a name="accountTagsInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput"></a>

```typescript
public readonly accountTagsInput: string[];
```

- *Type:* string[]

---

##### `automuteInput`<sup>Optional</sup> <a name="automuteInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput"></a>

```typescript
public readonly automuteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `cloudRunRevisionFiltersInput`<sup>Optional</sup> <a name="cloudRunRevisionFiltersInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFiltersInput"></a>

```typescript
public readonly cloudRunRevisionFiltersInput: string[];
```

- *Type:* string[]

---

##### `hostFiltersInput`<sup>Optional</sup> <a name="hostFiltersInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput"></a>

```typescript
public readonly hostFiltersInput: string[];
```

- *Type:* string[]

---

##### `isCspmEnabledInput`<sup>Optional</sup> <a name="isCspmEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput"></a>

```typescript
public readonly isCspmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPerProjectQuotaEnabledInput`<sup>Optional</sup> <a name="isPerProjectQuotaEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabledInput"></a>

```typescript
public readonly isPerProjectQuotaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isResourceChangeCollectionEnabledInput`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabledInput"></a>

```typescript
public readonly isResourceChangeCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabledInput`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput"></a>

```typescript
public readonly isSecurityCommandCenterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNamespaceConfigsInput`<sup>Optional</sup> <a name="metricNamespaceConfigsInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.metricNamespaceConfigsInput"></a>

```typescript
public readonly metricNamespaceConfigsInput: IResolvable | IntegrationGcpStsMetricNamespaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput"></a>

```typescript
public readonly resourceCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountTags`<sup>Required</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags"></a>

```typescript
public readonly accountTags: string[];
```

- *Type:* string[]

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute"></a>

```typescript
public readonly automute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `cloudRunRevisionFilters`<sup>Required</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cloudRunRevisionFilters"></a>

```typescript
public readonly cloudRunRevisionFilters: string[];
```

- *Type:* string[]

---

##### `hostFilters`<sup>Required</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters"></a>

```typescript
public readonly hostFilters: string[];
```

- *Type:* string[]

---

##### `isCspmEnabled`<sup>Required</sup> <a name="isCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled"></a>

```typescript
public readonly isCspmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPerProjectQuotaEnabled`<sup>Required</sup> <a name="isPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isPerProjectQuotaEnabled"></a>

```typescript
public readonly isPerProjectQuotaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isResourceChangeCollectionEnabled`<sup>Required</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isResourceChangeCollectionEnabled"></a>

```typescript
public readonly isResourceChangeCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabled`<sup>Required</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled"></a>

```typescript
public readonly isSecurityCommandCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpStsConfig <a name="IntegrationGcpStsConfig" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.Initializer"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

const integrationGcpStsConfig: integrationGcpSts.IntegrationGcpStsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail">clientEmail</a></code> | <code>string</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags">accountTags</a></code> | <code>string[]</code> | Tags to be associated with GCP metrics and service checks from your account. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute">automute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>string[]</code> | Tags to filter which Cloud Run revisions are imported into Datadog. Only revisions that meet specified criteria are monitored. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters">hostFilters</a></code> | <code>string[]</code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled">isCspmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isPerProjectQuotaEnabled">isPerProjectQuotaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog includes the `X-Goog-User-Project` header to attribute Google Cloud billing and quota usage to the monitored project instead of the default service account project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog scans for all resource change data in your Google Cloud environment. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.metricNamespaceConfigs">metricNamespaceConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]</code> | Configuration for a GCP metric namespace. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags"></a>

```typescript
public readonly accountTags: string[];
```

- *Type:* string[]

Tags to be associated with GCP metrics and service checks from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute"></a>

```typescript
public readonly automute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `cloudRunRevisionFilters`<sup>Optional</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.cloudRunRevisionFilters"></a>

```typescript
public readonly cloudRunRevisionFilters: string[];
```

- *Type:* string[]

Tags to filter which Cloud Run revisions are imported into Datadog. Only revisions that meet specified criteria are monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#cloud_run_revision_filters IntegrationGcpSts#cloud_run_revision_filters}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters"></a>

```typescript
public readonly hostFilters: string[];
```

- *Type:* string[]

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `isCspmEnabled`<sup>Optional</sup> <a name="isCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled"></a>

```typescript
public readonly isCspmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---

##### `isPerProjectQuotaEnabled`<sup>Optional</sup> <a name="isPerProjectQuotaEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isPerProjectQuotaEnabled"></a>

```typescript
public readonly isPerProjectQuotaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog includes the `X-Goog-User-Project` header to attribute Google Cloud billing and quota usage to the monitored project instead of the default service account project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_per_project_quota_enabled IntegrationGcpSts#is_per_project_quota_enabled}

---

##### `isResourceChangeCollectionEnabled`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isResourceChangeCollectionEnabled"></a>

```typescript
public readonly isResourceChangeCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog scans for all resource change data in your Google Cloud environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_resource_change_collection_enabled IntegrationGcpSts#is_resource_change_collection_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled"></a>

```typescript
public readonly isSecurityCommandCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}

---

##### `metricNamespaceConfigs`<sup>Optional</sup> <a name="metricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.metricNamespaceConfigs"></a>

```typescript
public readonly metricNamespaceConfigs: IResolvable | IntegrationGcpStsMetricNamespaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]

Configuration for a GCP metric namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#metric_namespace_configs IntegrationGcpSts#metric_namespace_configs}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}

---

### IntegrationGcpStsMetricNamespaceConfigs <a name="IntegrationGcpStsMetricNamespaceConfigs" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.Initializer"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

const integrationGcpStsMetricNamespaceConfigs: integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#disabled IntegrationGcpSts#disabled}. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#id IntegrationGcpSts#id}. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#disabled IntegrationGcpSts#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/integration_gcp_sts#id IntegrationGcpSts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpStsMetricNamespaceConfigsList <a name="IntegrationGcpStsMetricNamespaceConfigsList" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

new integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get"></a>

```typescript
public get(index: number): IntegrationGcpStsMetricNamespaceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationGcpStsMetricNamespaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>[]

---


### IntegrationGcpStsMetricNamespaceConfigsOutputReference <a name="IntegrationGcpStsMetricNamespaceConfigsOutputReference" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer"></a>

```typescript
import { integrationGcpSts } from '@cdktf/provider-datadog'

new integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationGcpStsMetricNamespaceConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsMetricNamespaceConfigs">IntegrationGcpStsMetricNamespaceConfigs</a>

---



