# `securityMonitoringFilter` Submodule <a name="`securityMonitoringFilter` Submodule" id="@cdktf/provider-datadog.securityMonitoringFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringFilter <a name="SecurityMonitoringFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter datadog_security_monitoring_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

new securityMonitoringFilter.SecurityMonitoringFilter(scope: Construct, id: string, config: SecurityMonitoringFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig">SecurityMonitoringFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig">SecurityMonitoringFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter">putExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetExclusionFilter">resetExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetFilteredDataType">resetFilteredDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExclusionFilter` <a name="putExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter"></a>

```typescript
public putExclusionFilter(value: IResolvable | SecurityMonitoringFilterExclusionFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]

---

##### `resetExclusionFilter` <a name="resetExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetExclusionFilter"></a>

```typescript
public resetExclusionFilter(): void
```

##### `resetFilteredDataType` <a name="resetFilteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetFilteredDataType"></a>

```typescript
public resetFilteredDataType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

securityMonitoringFilter.SecurityMonitoringFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityMonitoringFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilter">exclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList">SecurityMonitoringFilterExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilterInput">exclusionFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataTypeInput">filteredDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataType">filteredDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.query">query</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exclusionFilter`<sup>Required</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: SecurityMonitoringFilterExclusionFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList">SecurityMonitoringFilterExclusionFilterList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `exclusionFilterInput`<sup>Optional</sup> <a name="exclusionFilterInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilterInput"></a>

```typescript
public readonly exclusionFilterInput: IResolvable | SecurityMonitoringFilterExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]

---

##### `filteredDataTypeInput`<sup>Optional</sup> <a name="filteredDataTypeInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataTypeInput"></a>

```typescript
public readonly filteredDataTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `filteredDataType`<sup>Required</sup> <a name="filteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataType"></a>

```typescript
public readonly filteredDataType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringFilterConfig <a name="SecurityMonitoringFilterConfig" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.Initializer"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

const securityMonitoringFilterConfig: securityMonitoringFilter.SecurityMonitoringFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the security filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.name">name</a></code> | <code>string</code> | The name of the security filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.query">query</a></code> | <code>string</code> | The query of the security filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.exclusionFilter">exclusionFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]</code> | exclusion_filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.filteredDataType">filteredDataType</a></code> | <code>string</code> | The filtered data type. Valid values are `logs`. Defaults to `"logs"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#id SecurityMonitoringFilter#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the security filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#is_enabled SecurityMonitoringFilter#is_enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#name SecurityMonitoringFilter#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query of the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#query SecurityMonitoringFilter#query}

---

##### `exclusionFilter`<sup>Optional</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: IResolvable | SecurityMonitoringFilterExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]

exclusion_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#exclusion_filter SecurityMonitoringFilter#exclusion_filter}

---

##### `filteredDataType`<sup>Optional</sup> <a name="filteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.filteredDataType"></a>

```typescript
public readonly filteredDataType: string;
```

- *Type:* string

The filtered data type. Valid values are `logs`. Defaults to `"logs"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#filtered_data_type SecurityMonitoringFilter#filtered_data_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#id SecurityMonitoringFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecurityMonitoringFilterExclusionFilter <a name="SecurityMonitoringFilterExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.Initializer"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

const securityMonitoringFilterExclusionFilter: securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.name">name</a></code> | <code>string</code> | Exclusion filter name. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.query">query</a></code> | <code>string</code> | Exclusion filter query. Logs that match this query are excluded from the security filter. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Exclusion filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#name SecurityMonitoringFilter#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Exclusion filter query. Logs that match this query are excluded from the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/security_monitoring_filter#query SecurityMonitoringFilter#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringFilterExclusionFilterList <a name="SecurityMonitoringFilterExclusionFilterList" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

new securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get"></a>

```typescript
public get(index: number): SecurityMonitoringFilterExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringFilterExclusionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>[]

---


### SecurityMonitoringFilterExclusionFilterOutputReference <a name="SecurityMonitoringFilterExclusionFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer"></a>

```typescript
import { securityMonitoringFilter } from '@cdktf/provider-datadog'

new securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringFilterExclusionFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter">SecurityMonitoringFilterExclusionFilter</a>

---



