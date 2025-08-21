# `dataDatadogApmRetentionFiltersOrder` Submodule <a name="`dataDatadogApmRetentionFiltersOrder` Submodule" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogApmRetentionFiltersOrder <a name="DataDatadogApmRetentionFiltersOrder" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/apm_retention_filters_order datadog_apm_retention_filters_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

new dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder(scope: Construct, id: string, config?: DataDatadogApmRetentionFiltersOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig">DataDatadogApmRetentionFiltersOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig">DataDatadogApmRetentionFiltersOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogApmRetentionFiltersOrder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isConstruct"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformElement"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformDataSource"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogApmRetentionFiltersOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogApmRetentionFiltersOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogApmRetentionFiltersOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/apm_retention_filters_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogApmRetentionFiltersOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.filterIds">filterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filterIds`<sup>Required</sup> <a name="filterIds" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.filterIds"></a>

```typescript
public readonly filterIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogApmRetentionFiltersOrderConfig <a name="DataDatadogApmRetentionFiltersOrderConfig" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.Initializer"></a>

```typescript
import { dataDatadogApmRetentionFiltersOrder } from '@cdktf/provider-datadog'

const dataDatadogApmRetentionFiltersOrderConfig: dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogApmRetentionFiltersOrder.DataDatadogApmRetentionFiltersOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



