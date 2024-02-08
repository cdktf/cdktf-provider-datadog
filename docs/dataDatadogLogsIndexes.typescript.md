# `dataDatadogLogsIndexes` Submodule <a name="`dataDatadogLogsIndexes` Submodule" id="@cdktf/provider-datadog.dataDatadogLogsIndexes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogLogsIndexes <a name="DataDatadogLogsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/data-sources/logs_indexes datadog_logs_indexes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexes(scope: Construct, id: string, config?: DataDatadogLogsIndexesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig">DataDatadogLogsIndexesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig">DataDatadogLogsIndexesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogLogsIndexes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogLogsIndexes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogLogsIndexes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogLogsIndexes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/data-sources/logs_indexes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogLogsIndexes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.logsIndexes">logsIndexes</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList">DataDatadogLogsIndexesLogsIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `logsIndexes`<sup>Required</sup> <a name="logsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.logsIndexes"></a>

```typescript
public readonly logsIndexes: DataDatadogLogsIndexesLogsIndexesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList">DataDatadogLogsIndexesLogsIndexesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogLogsIndexesConfig <a name="DataDatadogLogsIndexesConfig" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesConfig: dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/data-sources/logs_indexes#id DataDatadogLogsIndexes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/data-sources/logs_indexes#id DataDatadogLogsIndexes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogLogsIndexesLogsIndexes <a name="DataDatadogLogsIndexesLogsIndexes" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesLogsIndexes: dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes = { ... }
```


### DataDatadogLogsIndexesLogsIndexesDailyLimitReset <a name="DataDatadogLogsIndexesLogsIndexesDailyLimitReset" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitReset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitReset.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesLogsIndexesDailyLimitReset: dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitReset = { ... }
```


### DataDatadogLogsIndexesLogsIndexesExclusionFilter <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesLogsIndexesExclusionFilter: dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter = { ... }
```


### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesLogsIndexesExclusionFilterFilter: dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter = { ... }
```


### DataDatadogLogsIndexesLogsIndexesFilter <a name="DataDatadogLogsIndexesLogsIndexesFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

const dataDatadogLogsIndexesLogsIndexesFilter: dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogLogsIndexesLogsIndexesDailyLimitResetList <a name="DataDatadogLogsIndexesLogsIndexesDailyLimitResetList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.get"></a>

```typescript
public get(index: number): DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference <a name="DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.resetTime">resetTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.resetUtcOffset">resetUtcOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitReset">DataDatadogLogsIndexesLogsIndexesDailyLimitReset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resetTime`<sup>Required</sup> <a name="resetTime" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.resetTime"></a>

```typescript
public readonly resetTime: string;
```

- *Type:* string

---

##### `resetUtcOffset`<sup>Required</sup> <a name="resetUtcOffset" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.resetUtcOffset"></a>

```typescript
public readonly resetUtcOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogLogsIndexesLogsIndexesDailyLimitReset;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitReset">DataDatadogLogsIndexesLogsIndexesDailyLimitReset</a>

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get"></a>

```typescript
public get(index: number): DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterList <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get"></a>

```typescript
public get(index: number): DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterFilterList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogLogsIndexesLogsIndexesExclusionFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilter">DataDatadogLogsIndexesLogsIndexesExclusionFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesFilterList <a name="DataDatadogLogsIndexesLogsIndexesFilterList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get"></a>

```typescript
public get(index: number): DataDatadogLogsIndexesLogsIndexesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesFilterOutputReference <a name="DataDatadogLogsIndexesLogsIndexesFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter">DataDatadogLogsIndexesLogsIndexesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogLogsIndexesLogsIndexesFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilter">DataDatadogLogsIndexesLogsIndexesFilter</a>

---


### DataDatadogLogsIndexesLogsIndexesList <a name="DataDatadogLogsIndexesLogsIndexesList" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get"></a>

```typescript
public get(index: number): DataDatadogLogsIndexesLogsIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogLogsIndexesLogsIndexesOutputReference <a name="DataDatadogLogsIndexesLogsIndexesOutputReference" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer"></a>

```typescript
import { dataDatadogLogsIndexes } from '@cdktf/provider-datadog'

new dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimitReset">dailyLimitReset</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList">DataDatadogLogsIndexesLogsIndexesDailyLimitResetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimitWarningThresholdPercentage">dailyLimitWarningThresholdPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.exclusionFilter">exclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList">DataDatadogLogsIndexesLogsIndexesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes">DataDatadogLogsIndexesLogsIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyLimit`<sup>Required</sup> <a name="dailyLimit" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

---

##### `dailyLimitReset`<sup>Required</sup> <a name="dailyLimitReset" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimitReset"></a>

```typescript
public readonly dailyLimitReset: DataDatadogLogsIndexesLogsIndexesDailyLimitResetList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesDailyLimitResetList">DataDatadogLogsIndexesLogsIndexesDailyLimitResetList</a>

---

##### `dailyLimitWarningThresholdPercentage`<sup>Required</sup> <a name="dailyLimitWarningThresholdPercentage" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.dailyLimitWarningThresholdPercentage"></a>

```typescript
public readonly dailyLimitWarningThresholdPercentage: number;
```

- *Type:* number

---

##### `exclusionFilter`<sup>Required</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: DataDatadogLogsIndexesLogsIndexesExclusionFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesExclusionFilterList">DataDatadogLogsIndexesLogsIndexesExclusionFilterList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.filter"></a>

```typescript
public readonly filter: DataDatadogLogsIndexesLogsIndexesFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesFilterList">DataDatadogLogsIndexesLogsIndexesFilterList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogLogsIndexesLogsIndexes;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogLogsIndexes.DataDatadogLogsIndexesLogsIndexes">DataDatadogLogsIndexesLogsIndexes</a>

---



