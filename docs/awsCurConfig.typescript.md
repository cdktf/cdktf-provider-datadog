# `awsCurConfig` Submodule <a name="`awsCurConfig` Submodule" id="@cdktf/provider-datadog.awsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCurConfig <a name="AwsCurConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

new awsCurConfig.AwsCurConfig(scope: Construct, id: string, config: AwsCurConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters">putAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters">resetAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountFilters` <a name="putAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters"></a>

```typescript
public putAccountFilters(value: AwsCurConfigAccountFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `resetAccountFilters` <a name="resetAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters"></a>

```typescript
public resetAccountFilters(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

awsCurConfig.AwsCurConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

awsCurConfig.AwsCurConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

awsCurConfig.AwsCurConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

awsCurConfig.AwsCurConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsCurConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters">accountFilters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput">accountFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput">reportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput">reportPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix">reportPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountFilters`<sup>Required</sup> <a name="accountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters"></a>

```typescript
public readonly accountFilters: AwsCurConfigAccountFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountFiltersInput`<sup>Optional</sup> <a name="accountFiltersInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput"></a>

```typescript
public readonly accountFiltersInput: IResolvable | AwsCurConfigAccountFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput"></a>

```typescript
public readonly reportNameInput: string;
```

- *Type:* string

---

##### `reportPrefixInput`<sup>Optional</sup> <a name="reportPrefixInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput"></a>

```typescript
public readonly reportPrefixInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix"></a>

```typescript
public readonly reportPrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsCurConfigAccountFilters <a name="AwsCurConfigAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.Initializer"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

const awsCurConfigAccountFilters: awsCurConfig.AwsCurConfigAccountFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | List of AWS account IDs to exclude from cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts">includedAccounts</a></code> | <code>string[]</code> | List of AWS account IDs to include in cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts">includeNewAccounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to automatically include new member accounts in your cost analysis. |

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

List of AWS account IDs to exclude from cost analysis.

Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}

---

##### `includedAccounts`<sup>Optional</sup> <a name="includedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts"></a>

```typescript
public readonly includedAccounts: string[];
```

- *Type:* string[]

List of AWS account IDs to include in cost analysis.

Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}

---

##### `includeNewAccounts`<sup>Optional</sup> <a name="includeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts"></a>

```typescript
public readonly includeNewAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to automatically include new member accounts in your cost analysis.

When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}

---

### AwsCurConfigConfig <a name="AwsCurConfigConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.Initializer"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

const awsCurConfigConfig: awsCurConfig.AwsCurConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId">accountId</a></code> | <code>string</code> | The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName">bucketName</a></code> | <code>string</code> | The S3 bucket name where your AWS Cost and Usage Report files are stored. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName">reportName</a></code> | <code>string</code> | The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix">reportPrefix</a></code> | <code>string</code> | The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/'). |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters">accountFilters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | account_filters block. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The S3 bucket name where your AWS Cost and Usage Report files are stored.

This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences.

This must match the report name exactly as it appears in your AWS billing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix"></a>

```typescript
public readonly reportPrefix: string;
```

- *Type:* string

The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}

---

##### `accountFilters`<sup>Optional</sup> <a name="accountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters"></a>

```typescript
public readonly accountFilters: AwsCurConfigAccountFilters;
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

account_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsCurConfigAccountFiltersOutputReference <a name="AwsCurConfigAccountFiltersOutputReference" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```typescript
import { awsCurConfig } from '@cdktf/provider-datadog'

new awsCurConfig.AwsCurConfigAccountFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts">resetIncludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts">resetIncludeNewAccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetIncludedAccounts` <a name="resetIncludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts"></a>

```typescript
public resetIncludedAccounts(): void
```

##### `resetIncludeNewAccounts` <a name="resetIncludeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts"></a>

```typescript
public resetIncludeNewAccounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput">includedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput">includeNewAccountsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts">includedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">includeNewAccounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `includedAccountsInput`<sup>Optional</sup> <a name="includedAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput"></a>

```typescript
public readonly includedAccountsInput: string[];
```

- *Type:* string[]

---

##### `includeNewAccountsInput`<sup>Optional</sup> <a name="includeNewAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput"></a>

```typescript
public readonly includeNewAccountsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `includedAccounts`<sup>Required</sup> <a name="includedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```typescript
public readonly includedAccounts: string[];
```

- *Type:* string[]

---

##### `includeNewAccounts`<sup>Required</sup> <a name="includeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```typescript
public readonly includeNewAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsCurConfigAccountFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---



