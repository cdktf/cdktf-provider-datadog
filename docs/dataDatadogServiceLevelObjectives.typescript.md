# `dataDatadogServiceLevelObjectives` Submodule <a name="`dataDatadogServiceLevelObjectives` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjectives <a name="DataDatadogServiceLevelObjectives" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives datadog_service_level_objectives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

new dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives(scope: Construct, id: string, config?: DataDatadogServiceLevelObjectivesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult">resetErrorOnEmptyResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery">resetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery">resetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery">resetTagsQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetErrorOnEmptyResult` <a name="resetErrorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult"></a>

```typescript
public resetErrorOnEmptyResult(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIds` <a name="resetIds" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds"></a>

```typescript
public resetIds(): void
```

##### `resetMetricsQuery` <a name="resetMetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery"></a>

```typescript
public resetMetricsQuery(): void
```

##### `resetNameQuery` <a name="resetNameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery"></a>

```typescript
public resetNameQuery(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetTagsQuery` <a name="resetTagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery"></a>

```typescript
public resetTagsQuery(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogServiceLevelObjectives to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogServiceLevelObjectives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjectives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos">slos</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput">errorOnEmptyResultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput">metricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput">nameQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput">tagsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult">errorOnEmptyResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery">nameQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery">tagsQuery</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `slos`<sup>Required</sup> <a name="slos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos"></a>

```typescript
public readonly slos: DataDatadogServiceLevelObjectivesSlosList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a>

---

##### `errorOnEmptyResultInput`<sup>Optional</sup> <a name="errorOnEmptyResultInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput"></a>

```typescript
public readonly errorOnEmptyResultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput"></a>

```typescript
public readonly metricsQueryInput: string;
```

- *Type:* string

---

##### `nameQueryInput`<sup>Optional</sup> <a name="nameQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput"></a>

```typescript
public readonly nameQueryInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `tagsQueryInput`<sup>Optional</sup> <a name="tagsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput"></a>

```typescript
public readonly tagsQueryInput: string;
```

- *Type:* string

---

##### `errorOnEmptyResult`<sup>Required</sup> <a name="errorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult"></a>

```typescript
public readonly errorOnEmptyResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

---

##### `nameQuery`<sup>Required</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery"></a>

```typescript
public readonly nameQuery: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `tagsQuery`<sup>Required</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery"></a>

```typescript
public readonly tagsQuery: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectivesConfig <a name="DataDatadogServiceLevelObjectivesConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

const dataDatadogServiceLevelObjectivesConfig: dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult">errorOnEmptyResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | Throw an error if no results are found. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids">ids</a></code> | <code>string[]</code> | An array of SLO IDs to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery">nameQuery</a></code> | <code>string</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query">query</a></code> | <code>string</code> | The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery">tagsQuery</a></code> | <code>string</code> | Filter results based on a single SLO tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorOnEmptyResult`<sup>Optional</sup> <a name="errorOnEmptyResult" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult"></a>

```typescript
public readonly errorOnEmptyResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Throw an error if no results are found. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

An array of SLO IDs to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}

---

##### `metricsQuery`<sup>Optional</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}

---

##### `nameQuery`<sup>Optional</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery"></a>

```typescript
public readonly nameQuery: string;
```

- *Type:* string

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}

---

##### `tagsQuery`<sup>Optional</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery"></a>

```typescript
public readonly tagsQuery: string;
```

- *Type:* string

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.56.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}

---

### DataDatadogServiceLevelObjectivesSlos <a name="DataDatadogServiceLevelObjectivesSlos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

const dataDatadogServiceLevelObjectivesSlos: dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectivesSlosList <a name="DataDatadogServiceLevelObjectivesSlosList" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

new dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get"></a>

```typescript
public get(index: number): DataDatadogServiceLevelObjectivesSlosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogServiceLevelObjectivesSlosOutputReference <a name="DataDatadogServiceLevelObjectivesSlosOutputReference" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjectives } from '@cdktf/provider-datadog'

new dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogServiceLevelObjectivesSlos;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a>

---



