# `dataDatadogSensitiveDataScannerGroupOrder` Submodule <a name="`dataDatadogSensitiveDataScannerGroupOrder` Submodule" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerGroupOrder <a name="DataDatadogSensitiveDataScannerGroupOrder" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.63.0/docs/data-sources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

new dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder(scope: Construct, id: string, config?: DataDatadogSensitiveDataScannerGroupOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerGroupOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSensitiveDataScannerGroupOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.63.0/docs/data-sources/sensitive_data_scanner_group_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerGroupOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds">groupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds"></a>

```typescript
public readonly groupIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerGroupOrderConfig <a name="DataDatadogSensitiveDataScannerGroupOrderConfig" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.Initializer"></a>

```typescript
import { dataDatadogSensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

const dataDatadogSensitiveDataScannerGroupOrderConfig: dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



