# `serviceDefinitionYaml` Submodule <a name="`serviceDefinitionYaml` Submodule" id="@cdktf/provider-datadog.serviceDefinitionYaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDefinitionYaml <a name="ServiceDefinitionYaml" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/service_definition_yaml datadog_service_definition_yaml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

new serviceDefinitionYaml.ServiceDefinitionYaml(scope: Construct, id: string, config: ServiceDefinitionYamlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig">ServiceDefinitionYamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig">ServiceDefinitionYamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceDefinitionYaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isConstruct"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

serviceDefinitionYaml.ServiceDefinitionYaml.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformElement"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformResource"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceDefinitionYaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceDefinitionYaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceDefinitionYaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/service_definition_yaml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceDefinitionYaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.serviceDefinitionInput">serviceDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.serviceDefinition">serviceDefinition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceDefinitionInput`<sup>Optional</sup> <a name="serviceDefinitionInput" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.serviceDefinitionInput"></a>

```typescript
public readonly serviceDefinitionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceDefinition`<sup>Required</sup> <a name="serviceDefinition" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.serviceDefinition"></a>

```typescript
public readonly serviceDefinition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYaml.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDefinitionYamlConfig <a name="ServiceDefinitionYamlConfig" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.Initializer"></a>

```typescript
import { serviceDefinitionYaml } from '@cdktf/provider-datadog'

const serviceDefinitionYamlConfig: serviceDefinitionYaml.ServiceDefinitionYamlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.serviceDefinition">serviceDefinition</a></code> | <code>string</code> | The YAML/JSON formatted definition of the service. |
| <code><a href="#@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/service_definition_yaml#id ServiceDefinitionYaml#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceDefinition`<sup>Required</sup> <a name="serviceDefinition" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.serviceDefinition"></a>

```typescript
public readonly serviceDefinition: string;
```

- *Type:* string

The YAML/JSON formatted definition of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/service_definition_yaml#service_definition ServiceDefinitionYaml#service_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceDefinitionYaml.ServiceDefinitionYamlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/service_definition_yaml#id ServiceDefinitionYaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



