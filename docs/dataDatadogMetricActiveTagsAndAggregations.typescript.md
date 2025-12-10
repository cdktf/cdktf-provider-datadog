# `dataDatadogMetricActiveTagsAndAggregations` Submodule <a name="`dataDatadogMetricActiveTagsAndAggregations` Submodule" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMetricActiveTagsAndAggregations <a name="DataDatadogMetricActiveTagsAndAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

new dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations(scope: Construct, id: string, config: DataDatadogMetricActiveTagsAndAggregationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow"></a>

```typescript
public resetWindow(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogMetricActiveTagsAndAggregations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogMetricActiveTagsAndAggregations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/metric_active_tags_and_aggregations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMetricActiveTagsAndAggregations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations">activeAggregations</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags">activeTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput">windowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window">window</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activeAggregations`<sup>Required</sup> <a name="activeAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations"></a>

```typescript
public readonly activeAggregations: DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a>

---

##### `activeTags`<sup>Required</sup> <a name="activeTags" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags"></a>

```typescript
public readonly activeTags: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput"></a>

```typescript
public readonly windowInput: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregations <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations.Initializer"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

const dataDatadogMetricActiveTagsAndAggregationsActiveAggregations: dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations = { ... }
```


### DataDatadogMetricActiveTagsAndAggregationsConfig <a name="DataDatadogMetricActiveTagsAndAggregationsConfig" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.Initializer"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

const dataDatadogMetricActiveTagsAndAggregationsConfig: dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric">metric</a></code> | <code>string</code> | The metric for which to fetch tags. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window">window</a></code> | <code>number</code> | The number of seconds to look back from now. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric for which to fetch tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window"></a>

```typescript
public readonly window: number;
```

- *Type:* number

The number of seconds to look back from now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

new dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get"></a>

```typescript
public get(index: number): DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer"></a>

```typescript
import { dataDatadogMetricActiveTagsAndAggregations } from '@cdktf/provider-datadog'

new dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space">space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogMetricActiveTagsAndAggregationsActiveAggregations;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a>

---



