# `integrationAwsAccount` Submodule <a name="`integrationAwsAccount` Submodule" id="@cdktf/provider-datadog.integrationAwsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccount <a name="IntegrationAwsAccount" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account datadog_integration_aws_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccount(scope: Construct, id: string, config: IntegrationAwsAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig">IntegrationAwsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig">IntegrationAwsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions">putAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig">putLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig">putMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig">putResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig">putTracesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags">resetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig">resetLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig">resetResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig">resetTracesConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig"></a>

```typescript
public putAuthConfig(value: IntegrationAwsAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---

##### `putAwsRegions` <a name="putAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions"></a>

```typescript
public putAwsRegions(value: IntegrationAwsAccountAwsRegions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---

##### `putLogsConfig` <a name="putLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig"></a>

```typescript
public putLogsConfig(value: IntegrationAwsAccountLogsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---

##### `putMetricsConfig` <a name="putMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig"></a>

```typescript
public putMetricsConfig(value: IntegrationAwsAccountMetricsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---

##### `putResourcesConfig` <a name="putResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig"></a>

```typescript
public putResourcesConfig(value: IntegrationAwsAccountResourcesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---

##### `putTracesConfig` <a name="putTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig"></a>

```typescript
public putTracesConfig(value: IntegrationAwsAccountTracesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---

##### `resetAccountTags` <a name="resetAccountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags"></a>

```typescript
public resetAccountTags(): void
```

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig"></a>

```typescript
public resetAuthConfig(): void
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetLogsConfig` <a name="resetLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig"></a>

```typescript
public resetLogsConfig(): void
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig"></a>

```typescript
public resetMetricsConfig(): void
```

##### `resetResourcesConfig` <a name="resetResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig"></a>

```typescript
public resetResourcesConfig(): void
```

##### `resetTracesConfig` <a name="resetTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig"></a>

```typescript
public resetTracesConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

integrationAwsAccount.IntegrationAwsAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

integrationAwsAccount.IntegrationAwsAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

integrationAwsAccount.IntegrationAwsAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAwsAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAwsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions">awsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig">resourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig">tracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput">accountTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput">authConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput">awsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput">awsRegionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput">logsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput">metricsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput">resourcesConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput">tracesConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags">accountTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition">awsPartition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig"></a>

```typescript
public readonly authConfig: IntegrationAwsAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a>

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions"></a>

```typescript
public readonly awsRegions: IntegrationAwsAccountAwsRegionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logsConfig`<sup>Required</sup> <a name="logsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig"></a>

```typescript
public readonly logsConfig: IntegrationAwsAccountLogsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: IntegrationAwsAccountMetricsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a>

---

##### `resourcesConfig`<sup>Required</sup> <a name="resourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig"></a>

```typescript
public readonly resourcesConfig: IntegrationAwsAccountResourcesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a>

---

##### `tracesConfig`<sup>Required</sup> <a name="tracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig"></a>

```typescript
public readonly tracesConfig: IntegrationAwsAccountTracesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a>

---

##### `accountTagsInput`<sup>Optional</sup> <a name="accountTagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput"></a>

```typescript
public readonly accountTagsInput: string[];
```

- *Type:* string[]

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: IResolvable | IntegrationAwsAccountAuthConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsPartitionInput`<sup>Optional</sup> <a name="awsPartitionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput"></a>

```typescript
public readonly awsPartitionInput: string;
```

- *Type:* string

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: IResolvable | IntegrationAwsAccountAwsRegions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---

##### `logsConfigInput`<sup>Optional</sup> <a name="logsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput"></a>

```typescript
public readonly logsConfigInput: IResolvable | IntegrationAwsAccountLogsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput"></a>

```typescript
public readonly metricsConfigInput: IResolvable | IntegrationAwsAccountMetricsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---

##### `resourcesConfigInput`<sup>Optional</sup> <a name="resourcesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput"></a>

```typescript
public readonly resourcesConfigInput: IResolvable | IntegrationAwsAccountResourcesConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---

##### `tracesConfigInput`<sup>Optional</sup> <a name="tracesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput"></a>

```typescript
public readonly tracesConfigInput: IResolvable | IntegrationAwsAccountTracesConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---

##### `accountTags`<sup>Required</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags"></a>

```typescript
public readonly accountTags: string[];
```

- *Type:* string[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountAuthConfig <a name="IntegrationAwsAccountAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountAuthConfig: integrationAwsAccount.IntegrationAwsAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys">awsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | aws_auth_config_keys block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole">awsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | aws_auth_config_role block. |

---

##### `awsAuthConfigKeys`<sup>Optional</sup> <a name="awsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys"></a>

```typescript
public readonly awsAuthConfigKeys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

aws_auth_config_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}

---

##### `awsAuthConfigRole`<sup>Optional</sup> <a name="awsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole"></a>

```typescript
public readonly awsAuthConfigRole: IntegrationAwsAccountAuthConfigAwsAuthConfigRole;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

aws_auth_config_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeys <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountAuthConfigAwsAuthConfigKeys: integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | AWS Access Key ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected. |

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

AWS Access Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigRole <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountAuthConfigAwsAuthConfigRole: integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId">externalId</a></code> | <code>string</code> | AWS IAM External ID for associated role. If omitted, one will be generated. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName">roleName</a></code> | <code>string</code> | AWS IAM Role name. |

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

AWS IAM External ID for associated role. If omitted, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

AWS IAM Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}

---

### IntegrationAwsAccountAwsRegions <a name="IntegrationAwsAccountAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountAwsRegions: integrationAwsAccount.IntegrationAwsAccountAwsRegions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include all regions. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | Include only these regions. |

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include all regions. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

Include only these regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountConfig <a name="IntegrationAwsAccountConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountConfig: integrationAwsAccount.IntegrationAwsAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition">awsPartition</a></code> | <code>string</code> | AWS Account partition. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags">accountTags</a></code> | <code>string[]</code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions">awsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig">resourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig">tracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

AWS Account partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags"></a>

```typescript
public readonly accountTags: string[];
```

- *Type:* string[]

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig"></a>

```typescript
public readonly authConfig: IntegrationAwsAccountAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions"></a>

```typescript
public readonly awsRegions: IntegrationAwsAccountAwsRegions;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `logsConfig`<sup>Optional</sup> <a name="logsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig"></a>

```typescript
public readonly logsConfig: IntegrationAwsAccountLogsConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: IntegrationAwsAccountMetricsConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `resourcesConfig`<sup>Optional</sup> <a name="resourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig"></a>

```typescript
public readonly resourcesConfig: IntegrationAwsAccountResourcesConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `tracesConfig`<sup>Optional</sup> <a name="tracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig"></a>

```typescript
public readonly tracesConfig: IntegrationAwsAccountTracesConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

### IntegrationAwsAccountLogsConfig <a name="IntegrationAwsAccountLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountLogsConfig: integrationAwsAccount.IntegrationAwsAccountLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder">lambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | lambda_forwarder block. |

---

##### `lambdaForwarder`<sup>Optional</sup> <a name="lambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder"></a>

```typescript
public readonly lambdaForwarder: IntegrationAwsAccountLogsConfigLambdaForwarder;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

lambda_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}

---

### IntegrationAwsAccountLogsConfigLambdaForwarder <a name="IntegrationAwsAccountLogsConfigLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountLogsConfigLambdaForwarder: integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas">lambdas</a></code> | <code>string[]</code> | List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources">sources</a></code> | <code>string[]</code> | List of service IDs set to enable automatic log collection. |

---

##### `lambdas`<sup>Optional</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas"></a>

```typescript
public readonly lambdas: string[];
```

- *Type:* string[]

List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

List of service IDs set to enable automatic log collection.

Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) to get allowed values. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}

---

### IntegrationAwsAccountMetricsConfig <a name="IntegrationAwsAccountMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountMetricsConfig: integrationAwsAccount.IntegrationAwsAccountMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled">automuteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable EC2 automute for AWS metrics Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms">collectCloudwatchAlarms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable CloudWatch alarms collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics">collectCustomMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable custom metrics collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable AWS metrics collection Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters">namespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | namespace_filters block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters">tagFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]</code> | tag_filters block. |

---

##### `automuteEnabled`<sup>Optional</sup> <a name="automuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled"></a>

```typescript
public readonly automuteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable EC2 automute for AWS metrics Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}

---

##### `collectCloudwatchAlarms`<sup>Optional</sup> <a name="collectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms"></a>

```typescript
public readonly collectCloudwatchAlarms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable CloudWatch alarms collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}

---

##### `collectCustomMetrics`<sup>Optional</sup> <a name="collectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics"></a>

```typescript
public readonly collectCustomMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable custom metrics collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable AWS metrics collection Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}

---

##### `namespaceFilters`<sup>Optional</sup> <a name="namespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters"></a>

```typescript
public readonly namespaceFilters: IntegrationAwsAccountMetricsConfigNamespaceFilters;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

namespace_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters"></a>

```typescript
public readonly tagFilters: IResolvable | IntegrationAwsAccountMetricsConfigTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}

---

### IntegrationAwsAccountMetricsConfigNamespaceFilters <a name="IntegrationAwsAccountMetricsConfigNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountMetricsConfigNamespaceFilters: integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly">excludeOnly</a></code> | <code>string[]</code> | Exclude only these namespaces from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. |

---

##### `excludeOnly`<sup>Optional</sup> <a name="excludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly"></a>

```typescript
public readonly excludeOnly: string[];
```

- *Type:* string[]

Exclude only these namespaces from metrics collection.

Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountMetricsConfigTagFilters <a name="IntegrationAwsAccountMetricsConfigTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountMetricsConfigTagFilters: integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace">namespace</a></code> | <code>string</code> | The AWS service for which the tag filters defined in `tags` will be applied. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags">tags</a></code> | <code>string[]</code> | The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The AWS service for which the tag filters defined in `tags` will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}

---

### IntegrationAwsAccountResourcesConfig <a name="IntegrationAwsAccountResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountResourcesConfig: integrationAwsAccount.IntegrationAwsAccountResourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection">cloudSecurityPostureManagementCollection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection">extendedCollection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. |

---

##### `cloudSecurityPostureManagementCollection`<sup>Optional</sup> <a name="cloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection"></a>

```typescript
public readonly cloudSecurityPostureManagementCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations.

Requires `extended_collection` to be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}

---

##### `extendedCollection`<sup>Optional</sup> <a name="extendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection"></a>

```typescript
public readonly extendedCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account.

Required for `cloud_security_posture_management_collection`. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}

---

### IntegrationAwsAccountTracesConfig <a name="IntegrationAwsAccountTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountTracesConfig: integrationAwsAccount.IntegrationAwsAccountTracesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices">xrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | xray_services block. |

---

##### `xrayServices`<sup>Optional</sup> <a name="xrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices"></a>

```typescript
public readonly xrayServices: IntegrationAwsAccountTracesConfigXrayServices;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

xray_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}

---

### IntegrationAwsAccountTracesConfigXrayServices <a name="IntegrationAwsAccountTracesConfigXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

const integrationAwsAccountTracesConfigXrayServices: integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include all services. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | Include only these services. Defaults to `[]`. |

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

Include only these services. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---


### IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName"></a>

```typescript
public resetRoleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountAuthConfigAwsAuthConfigRole;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---


### IntegrationAwsAccountAuthConfigOutputReference <a name="IntegrationAwsAccountAuthConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys">putAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole">putAwsAuthConfigRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys">resetAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole">resetAwsAuthConfigRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAuthConfigKeys` <a name="putAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys"></a>

```typescript
public putAwsAuthConfigKeys(value: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---

##### `putAwsAuthConfigRole` <a name="putAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole"></a>

```typescript
public putAwsAuthConfigRole(value: IntegrationAwsAccountAuthConfigAwsAuthConfigRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---

##### `resetAwsAuthConfigKeys` <a name="resetAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys"></a>

```typescript
public resetAwsAuthConfigKeys(): void
```

##### `resetAwsAuthConfigRole` <a name="resetAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole"></a>

```typescript
public resetAwsAuthConfigRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys">awsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole">awsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput">awsAuthConfigKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput">awsAuthConfigRoleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAuthConfigKeys`<sup>Required</sup> <a name="awsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys"></a>

```typescript
public readonly awsAuthConfigKeys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a>

---

##### `awsAuthConfigRole`<sup>Required</sup> <a name="awsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole"></a>

```typescript
public readonly awsAuthConfigRole: IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a>

---

##### `awsAuthConfigKeysInput`<sup>Optional</sup> <a name="awsAuthConfigKeysInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput"></a>

```typescript
public readonly awsAuthConfigKeysInput: IResolvable | IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---

##### `awsAuthConfigRoleInput`<sup>Optional</sup> <a name="awsAuthConfigRoleInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput"></a>

```typescript
public readonly awsAuthConfigRoleInput: IResolvable | IntegrationAwsAccountAuthConfigAwsAuthConfigRole;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountAuthConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---


### IntegrationAwsAccountAwsRegionsOutputReference <a name="IntegrationAwsAccountAwsRegionsOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly"></a>

```typescript
public resetIncludeOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput"></a>

```typescript
public readonly includeOnlyInput: string[];
```

- *Type:* string[]

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountAwsRegions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---


### IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference <a name="IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas">resetLambdas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdas` <a name="resetLambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas"></a>

```typescript
public resetLambdas(): void
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources"></a>

```typescript
public resetSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput">lambdasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas">lambdas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources">sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdasInput`<sup>Optional</sup> <a name="lambdasInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput"></a>

```typescript
public readonly lambdasInput: string[];
```

- *Type:* string[]

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: string[];
```

- *Type:* string[]

---

##### `lambdas`<sup>Required</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas"></a>

```typescript
public readonly lambdas: string[];
```

- *Type:* string[]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountLogsConfigLambdaForwarder;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---


### IntegrationAwsAccountLogsConfigOutputReference <a name="IntegrationAwsAccountLogsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder">putLambdaForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder">resetLambdaForwarder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaForwarder` <a name="putLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder"></a>

```typescript
public putLambdaForwarder(value: IntegrationAwsAccountLogsConfigLambdaForwarder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---

##### `resetLambdaForwarder` <a name="resetLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder"></a>

```typescript
public resetLambdaForwarder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder">lambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput">lambdaForwarderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaForwarder`<sup>Required</sup> <a name="lambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder"></a>

```typescript
public readonly lambdaForwarder: IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a>

---

##### `lambdaForwarderInput`<sup>Optional</sup> <a name="lambdaForwarderInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput"></a>

```typescript
public readonly lambdaForwarderInput: IResolvable | IntegrationAwsAccountLogsConfigLambdaForwarder;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountLogsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---


### IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly">resetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeOnly` <a name="resetExcludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly"></a>

```typescript
public resetExcludeOnly(): void
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly"></a>

```typescript
public resetIncludeOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput">excludeOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly">excludeOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeOnlyInput`<sup>Optional</sup> <a name="excludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput"></a>

```typescript
public readonly excludeOnlyInput: string[];
```

- *Type:* string[]

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput"></a>

```typescript
public readonly includeOnlyInput: string[];
```

- *Type:* string[]

---

##### `excludeOnly`<sup>Required</sup> <a name="excludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly"></a>

```typescript
public readonly excludeOnly: string[];
```

- *Type:* string[]

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountMetricsConfigNamespaceFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---


### IntegrationAwsAccountMetricsConfigOutputReference <a name="IntegrationAwsAccountMetricsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters">putNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled">resetAutomuteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms">resetCollectCloudwatchAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics">resetCollectCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters">resetNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaceFilters` <a name="putNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters"></a>

```typescript
public putNamespaceFilters(value: IntegrationAwsAccountMetricsConfigNamespaceFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters"></a>

```typescript
public putTagFilters(value: IResolvable | IntegrationAwsAccountMetricsConfigTagFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]

---

##### `resetAutomuteEnabled` <a name="resetAutomuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled"></a>

```typescript
public resetAutomuteEnabled(): void
```

##### `resetCollectCloudwatchAlarms` <a name="resetCollectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms"></a>

```typescript
public resetCollectCloudwatchAlarms(): void
```

##### `resetCollectCustomMetrics` <a name="resetCollectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics"></a>

```typescript
public resetCollectCustomMetrics(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNamespaceFilters` <a name="resetNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters"></a>

```typescript
public resetNamespaceFilters(): void
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters"></a>

```typescript
public resetTagFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters">namespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput">automuteEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput">collectCloudwatchAlarmsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput">collectCustomMetricsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput">namespaceFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled">automuteEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms">collectCloudwatchAlarms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics">collectCustomMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceFilters`<sup>Required</sup> <a name="namespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters"></a>

```typescript
public readonly namespaceFilters: IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a>

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: IntegrationAwsAccountMetricsConfigTagFiltersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a>

---

##### `automuteEnabledInput`<sup>Optional</sup> <a name="automuteEnabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput"></a>

```typescript
public readonly automuteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collectCloudwatchAlarmsInput`<sup>Optional</sup> <a name="collectCloudwatchAlarmsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput"></a>

```typescript
public readonly collectCloudwatchAlarmsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collectCustomMetricsInput`<sup>Optional</sup> <a name="collectCustomMetricsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput"></a>

```typescript
public readonly collectCustomMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceFiltersInput`<sup>Optional</sup> <a name="namespaceFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput"></a>

```typescript
public readonly namespaceFiltersInput: IResolvable | IntegrationAwsAccountMetricsConfigNamespaceFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput"></a>

```typescript
public readonly tagFiltersInput: IResolvable | IntegrationAwsAccountMetricsConfigTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]

---

##### `automuteEnabled`<sup>Required</sup> <a name="automuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled"></a>

```typescript
public readonly automuteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collectCloudwatchAlarms`<sup>Required</sup> <a name="collectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms"></a>

```typescript
public readonly collectCloudwatchAlarms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collectCustomMetrics`<sup>Required</sup> <a name="collectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics"></a>

```typescript
public readonly collectCustomMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountMetricsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---


### IntegrationAwsAccountMetricsConfigTagFiltersList <a name="IntegrationAwsAccountMetricsConfigTagFiltersList" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get"></a>

```typescript
public get(index: number): IntegrationAwsAccountMetricsConfigTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountMetricsConfigTagFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>[]

---


### IntegrationAwsAccountMetricsConfigTagFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigTagFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountMetricsConfigTagFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>

---


### IntegrationAwsAccountResourcesConfigOutputReference <a name="IntegrationAwsAccountResourcesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection">resetCloudSecurityPostureManagementCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection">resetExtendedCollection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudSecurityPostureManagementCollection` <a name="resetCloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection"></a>

```typescript
public resetCloudSecurityPostureManagementCollection(): void
```

##### `resetExtendedCollection` <a name="resetExtendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection"></a>

```typescript
public resetExtendedCollection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput">cloudSecurityPostureManagementCollectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput">extendedCollectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection">cloudSecurityPostureManagementCollection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection">extendedCollection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSecurityPostureManagementCollectionInput`<sup>Optional</sup> <a name="cloudSecurityPostureManagementCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput"></a>

```typescript
public readonly cloudSecurityPostureManagementCollectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedCollectionInput`<sup>Optional</sup> <a name="extendedCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput"></a>

```typescript
public readonly extendedCollectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudSecurityPostureManagementCollection`<sup>Required</sup> <a name="cloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection"></a>

```typescript
public readonly cloudSecurityPostureManagementCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedCollection`<sup>Required</sup> <a name="extendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection"></a>

```typescript
public readonly extendedCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountResourcesConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---


### IntegrationAwsAccountTracesConfigOutputReference <a name="IntegrationAwsAccountTracesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices">putXrayServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices">resetXrayServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putXrayServices` <a name="putXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices"></a>

```typescript
public putXrayServices(value: IntegrationAwsAccountTracesConfigXrayServices): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---

##### `resetXrayServices` <a name="resetXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices"></a>

```typescript
public resetXrayServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices">xrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput">xrayServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xrayServices`<sup>Required</sup> <a name="xrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices"></a>

```typescript
public readonly xrayServices: IntegrationAwsAccountTracesConfigXrayServicesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a>

---

##### `xrayServicesInput`<sup>Optional</sup> <a name="xrayServicesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput"></a>

```typescript
public readonly xrayServicesInput: IResolvable | IntegrationAwsAccountTracesConfigXrayServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountTracesConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---


### IntegrationAwsAccountTracesConfigXrayServicesOutputReference <a name="IntegrationAwsAccountTracesConfigXrayServicesOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer"></a>

```typescript
import { integrationAwsAccount } from '@cdktf/provider-datadog'

new integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly"></a>

```typescript
public resetIncludeOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll">includeAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly">includeOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput"></a>

```typescript
public readonly includeOnlyInput: string[];
```

- *Type:* string[]

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly"></a>

```typescript
public readonly includeOnly: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationAwsAccountTracesConfigXrayServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---



