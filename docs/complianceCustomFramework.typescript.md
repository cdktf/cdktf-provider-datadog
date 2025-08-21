# `complianceCustomFramework` Submodule <a name="`complianceCustomFramework` Submodule" id="@cdktf/provider-datadog.complianceCustomFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceCustomFramework <a name="ComplianceCustomFramework" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

new complianceCustomFramework.ComplianceCustomFramework(scope: Construct, id: string, config: ComplianceCustomFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements">putRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements">resetRequirements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequirements` <a name="putRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements"></a>

```typescript
public putRequirements(value: IResolvable | ComplianceCustomFrameworkRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl"></a>

```typescript
public resetIconUrl(): void
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements"></a>

```typescript
public resetRequirements(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

complianceCustomFramework.ComplianceCustomFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

complianceCustomFramework.ComplianceCustomFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

complianceCustomFramework.ComplianceCustomFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceCustomFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceCustomFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceCustomFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements">requirements</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput">handleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput">iconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput">requirementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl">iconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements"></a>

```typescript
public readonly requirements: ComplianceCustomFrameworkRequirementsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a>

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput"></a>

```typescript
public readonly handleInput: string;
```

- *Type:* string

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput"></a>

```typescript
public readonly iconUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput"></a>

```typescript
public readonly requirementsInput: IResolvable | ComplianceCustomFrameworkRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceCustomFrameworkConfig <a name="ComplianceCustomFrameworkConfig" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

const complianceCustomFrameworkConfig: complianceCustomFramework.ComplianceCustomFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle">handle</a></code> | <code>string</code> | The framework handle. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name">name</a></code> | <code>string</code> | The framework name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version">version</a></code> | <code>string</code> | The framework version. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl">iconUrl</a></code> | <code>string</code> | The URL of the icon representing the framework. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements">requirements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | requirements block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

The framework handle. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The framework name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The framework version. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

The URL of the icon representing the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements"></a>

```typescript
public readonly requirements: IResolvable | ComplianceCustomFrameworkRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}

---

### ComplianceCustomFrameworkRequirements <a name="ComplianceCustomFrameworkRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

const complianceCustomFrameworkRequirements: complianceCustomFramework.ComplianceCustomFrameworkRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name">name</a></code> | <code>string</code> | The name of the requirement. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls">controls</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | controls block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the requirement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `controls`<sup>Optional</sup> <a name="controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls"></a>

```typescript
public readonly controls: IResolvable | ComplianceCustomFrameworkRequirementsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#controls ComplianceCustomFramework#controls}

---

### ComplianceCustomFrameworkRequirementsControls <a name="ComplianceCustomFrameworkRequirementsControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

const complianceCustomFrameworkRequirementsControls: complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name">name</a></code> | <code>string</code> | The name of the control. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId">rulesId</a></code> | <code>string[]</code> | The set of rules IDs for the control. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the control. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `rulesId`<sup>Required</sup> <a name="rulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId"></a>

```typescript
public readonly rulesId: string[];
```

- *Type:* string[]

The set of rules IDs for the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/resources/compliance_custom_framework#rules_id ComplianceCustomFramework#rules_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceCustomFrameworkRequirementsControlsList <a name="ComplianceCustomFrameworkRequirementsControlsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

new complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get"></a>

```typescript
public get(index: number): ComplianceCustomFrameworkRequirementsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComplianceCustomFrameworkRequirementsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---


### ComplianceCustomFrameworkRequirementsControlsOutputReference <a name="ComplianceCustomFrameworkRequirementsControlsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

new complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput">rulesIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId">rulesId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesIdInput`<sup>Optional</sup> <a name="rulesIdInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput"></a>

```typescript
public readonly rulesIdInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rulesId`<sup>Required</sup> <a name="rulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId"></a>

```typescript
public readonly rulesId: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComplianceCustomFrameworkRequirementsControls;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>

---


### ComplianceCustomFrameworkRequirementsList <a name="ComplianceCustomFrameworkRequirementsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

new complianceCustomFramework.ComplianceCustomFrameworkRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get"></a>

```typescript
public get(index: number): ComplianceCustomFrameworkRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComplianceCustomFrameworkRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>[]

---


### ComplianceCustomFrameworkRequirementsOutputReference <a name="ComplianceCustomFrameworkRequirementsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer"></a>

```typescript
import { complianceCustomFramework } from '@cdktf/provider-datadog'

new complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls">putControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls">resetControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls"></a>

```typescript
public putControls(value: IResolvable | ComplianceCustomFrameworkRequirementsControls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---

##### `resetControls` <a name="resetControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls"></a>

```typescript
public resetControls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput">controlsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls"></a>

```typescript
public readonly controls: ComplianceCustomFrameworkRequirementsControlsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a>

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput"></a>

```typescript
public readonly controlsInput: IResolvable | ComplianceCustomFrameworkRequirementsControls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComplianceCustomFrameworkRequirements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>

---



