# `azureUcConfig` Submodule <a name="`azureUcConfig` Submodule" id="@cdktf/provider-datadog.azureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureUcConfig <a name="AzureUcConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

new azureUcConfig.AzureUcConfig(scope: Construct, id: string, config: AzureUcConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig">AzureUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig">AzureUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig">putActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig">putAmortizedBillConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActualBillConfig` <a name="putActualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig"></a>

```typescript
public putActualBillConfig(value: AzureUcConfigActualBillConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `putAmortizedBillConfig` <a name="putAmortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig"></a>

```typescript
public putAmortizedBillConfig(value: AzureUcConfigAmortizedBillConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

azureUcConfig.AzureUcConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

azureUcConfig.AzureUcConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

azureUcConfig.AzureUcConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

azureUcConfig.AzureUcConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput">actualBillConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput">amortizedBillConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig"></a>

```typescript
public readonly actualBillConfig: AzureUcConfigActualBillConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig"></a>

```typescript
public readonly amortizedBillConfig: AzureUcConfigAmortizedBillConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `actualBillConfigInput`<sup>Optional</sup> <a name="actualBillConfigInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput"></a>

```typescript
public readonly actualBillConfigInput: IResolvable | AzureUcConfigActualBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `amortizedBillConfigInput`<sup>Optional</sup> <a name="amortizedBillConfigInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput"></a>

```typescript
public readonly amortizedBillConfigInput: IResolvable | AzureUcConfigAmortizedBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureUcConfigActualBillConfig <a name="AzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

const azureUcConfigActualBillConfig: azureUcConfig.AzureUcConfigActualBillConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName">exportName</a></code> | <code>string</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath">exportPath</a></code> | <code>string</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount">storageAccount</a></code> | <code>string</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer">storageContainer</a></code> | <code>string</code> | The name of the storage container where the Azure Export is saved. |

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigAmortizedBillConfig <a name="AzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

const azureUcConfigAmortizedBillConfig: azureUcConfig.AzureUcConfigAmortizedBillConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName">exportName</a></code> | <code>string</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath">exportPath</a></code> | <code>string</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount">storageAccount</a></code> | <code>string</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer">storageContainer</a></code> | <code>string</code> | The name of the storage container where the Azure Export is saved. |

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigConfig <a name="AzureUcConfigConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

const azureUcConfigConfig: azureUcConfig.AzureUcConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId">accountId</a></code> | <code>string</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope">scope</a></code> | <code>string</code> | The scope of your observed subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig"></a>

```typescript
public readonly actualBillConfig: AzureUcConfigActualBillConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig"></a>

```typescript
public readonly amortizedBillConfig: AzureUcConfigAmortizedBillConfig;
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureUcConfigActualBillConfigOutputReference <a name="AzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

new azureUcConfig.AzureUcConfigActualBillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput">exportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput">exportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput">storageContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName">exportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportNameInput`<sup>Optional</sup> <a name="exportNameInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput"></a>

```typescript
public readonly exportNameInput: string;
```

- *Type:* string

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput"></a>

```typescript
public readonly exportPathInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: string;
```

- *Type:* string

---

##### `storageContainerInput`<sup>Optional</sup> <a name="storageContainerInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput"></a>

```typescript
public readonly storageContainerInput: string;
```

- *Type:* string

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AzureUcConfigActualBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---


### AzureUcConfigAmortizedBillConfigOutputReference <a name="AzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```typescript
import { azureUcConfig } from '@cdktf/provider-datadog'

new azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput">exportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput">exportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput">storageContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName">exportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportNameInput`<sup>Optional</sup> <a name="exportNameInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput"></a>

```typescript
public readonly exportNameInput: string;
```

- *Type:* string

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput"></a>

```typescript
public readonly exportPathInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: string;
```

- *Type:* string

---

##### `storageContainerInput`<sup>Optional</sup> <a name="storageContainerInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput"></a>

```typescript
public readonly storageContainerInput: string;
```

- *Type:* string

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AzureUcConfigAmortizedBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---



