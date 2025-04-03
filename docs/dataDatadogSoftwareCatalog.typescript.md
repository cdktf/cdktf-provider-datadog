# `dataDatadogSoftwareCatalog` Submodule <a name="`dataDatadogSoftwareCatalog` Submodule" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSoftwareCatalog <a name="DataDatadogSoftwareCatalog" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog datadog_software_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

new dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog(scope: Construct, id: string, config?: DataDatadogSoftwareCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig">DataDatadogSoftwareCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot">resetFilterExcludeSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId">resetFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind">resetFilterKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName">resetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner">resetFilterOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef">resetFilterRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType">resetFilterRelationType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilterExcludeSnapshot` <a name="resetFilterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterExcludeSnapshot"></a>

```typescript
public resetFilterExcludeSnapshot(): void
```

##### `resetFilterId` <a name="resetFilterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterId"></a>

```typescript
public resetFilterId(): void
```

##### `resetFilterKind` <a name="resetFilterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterKind"></a>

```typescript
public resetFilterKind(): void
```

##### `resetFilterName` <a name="resetFilterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterName"></a>

```typescript
public resetFilterName(): void
```

##### `resetFilterOwner` <a name="resetFilterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterOwner"></a>

```typescript
public resetFilterOwner(): void
```

##### `resetFilterRef` <a name="resetFilterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRef"></a>

```typescript
public resetFilterRef(): void
```

##### `resetFilterRelationType` <a name="resetFilterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.resetFilterRelationType"></a>

```typescript
public resetFilterRelationType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogSoftwareCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSoftwareCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSoftwareCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSoftwareCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput">filterExcludeSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput">filterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput">filterKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput">filterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput">filterOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput">filterRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput">filterRelationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot">filterExcludeSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId">filterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind">filterKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName">filterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner">filterOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef">filterRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType">filterRelationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.entities"></a>

```typescript
public readonly entities: DataDatadogSoftwareCatalogEntitiesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList">DataDatadogSoftwareCatalogEntitiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `filterExcludeSnapshotInput`<sup>Optional</sup> <a name="filterExcludeSnapshotInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshotInput"></a>

```typescript
public readonly filterExcludeSnapshotInput: string;
```

- *Type:* string

---

##### `filterIdInput`<sup>Optional</sup> <a name="filterIdInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterIdInput"></a>

```typescript
public readonly filterIdInput: string;
```

- *Type:* string

---

##### `filterKindInput`<sup>Optional</sup> <a name="filterKindInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKindInput"></a>

```typescript
public readonly filterKindInput: string;
```

- *Type:* string

---

##### `filterNameInput`<sup>Optional</sup> <a name="filterNameInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterNameInput"></a>

```typescript
public readonly filterNameInput: string;
```

- *Type:* string

---

##### `filterOwnerInput`<sup>Optional</sup> <a name="filterOwnerInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwnerInput"></a>

```typescript
public readonly filterOwnerInput: string;
```

- *Type:* string

---

##### `filterRefInput`<sup>Optional</sup> <a name="filterRefInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRefInput"></a>

```typescript
public readonly filterRefInput: string;
```

- *Type:* string

---

##### `filterRelationTypeInput`<sup>Optional</sup> <a name="filterRelationTypeInput" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationTypeInput"></a>

```typescript
public readonly filterRelationTypeInput: string;
```

- *Type:* string

---

##### `filterExcludeSnapshot`<sup>Required</sup> <a name="filterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterExcludeSnapshot"></a>

```typescript
public readonly filterExcludeSnapshot: string;
```

- *Type:* string

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

---

##### `filterKind`<sup>Required</sup> <a name="filterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterKind"></a>

```typescript
public readonly filterKind: string;
```

- *Type:* string

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

---

##### `filterOwner`<sup>Required</sup> <a name="filterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterOwner"></a>

```typescript
public readonly filterOwner: string;
```

- *Type:* string

---

##### `filterRef`<sup>Required</sup> <a name="filterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRef"></a>

```typescript
public readonly filterRef: string;
```

- *Type:* string

---

##### `filterRelationType`<sup>Required</sup> <a name="filterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.filterRelationType"></a>

```typescript
public readonly filterRelationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSoftwareCatalogConfig <a name="DataDatadogSoftwareCatalogConfig" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.Initializer"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

const dataDatadogSoftwareCatalogConfig: dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot">filterExcludeSnapshot</a></code> | <code>string</code> | Filter entities by excluding snapshotted entities. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId">filterId</a></code> | <code>string</code> | Filter entities by UUID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind">filterKind</a></code> | <code>string</code> | Filter entities by kind. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName">filterName</a></code> | <code>string</code> | Filter entities by name. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner">filterOwner</a></code> | <code>string</code> | Filter entities by owner. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef">filterRef</a></code> | <code>string</code> | Filter entities by reference. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType">filterRelationType</a></code> | <code>string</code> | Filter entities by relation type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterExcludeSnapshot`<sup>Optional</sup> <a name="filterExcludeSnapshot" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterExcludeSnapshot"></a>

```typescript
public readonly filterExcludeSnapshot: string;
```

- *Type:* string

Filter entities by excluding snapshotted entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_exclude_snapshot DataDatadogSoftwareCatalog#filter_exclude_snapshot}

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

Filter entities by UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_id DataDatadogSoftwareCatalog#filter_id}

---

##### `filterKind`<sup>Optional</sup> <a name="filterKind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterKind"></a>

```typescript
public readonly filterKind: string;
```

- *Type:* string

Filter entities by kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_kind DataDatadogSoftwareCatalog#filter_kind}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

Filter entities by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_name DataDatadogSoftwareCatalog#filter_name}

---

##### `filterOwner`<sup>Optional</sup> <a name="filterOwner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterOwner"></a>

```typescript
public readonly filterOwner: string;
```

- *Type:* string

Filter entities by owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_owner DataDatadogSoftwareCatalog#filter_owner}

---

##### `filterRef`<sup>Optional</sup> <a name="filterRef" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRef"></a>

```typescript
public readonly filterRef: string;
```

- *Type:* string

Filter entities by reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_ref DataDatadogSoftwareCatalog#filter_ref}

---

##### `filterRelationType`<sup>Optional</sup> <a name="filterRelationType" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogConfig.property.filterRelationType"></a>

```typescript
public readonly filterRelationType: string;
```

- *Type:* string

Filter entities by relation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/data-sources/software_catalog#filter_relation_type DataDatadogSoftwareCatalog#filter_relation_type}

---

### DataDatadogSoftwareCatalogEntities <a name="DataDatadogSoftwareCatalogEntities" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities.Initializer"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

const dataDatadogSoftwareCatalogEntities: dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSoftwareCatalogEntitiesList <a name="DataDatadogSoftwareCatalogEntitiesList" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

new dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get"></a>

```typescript
public get(index: number): DataDatadogSoftwareCatalogEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogSoftwareCatalogEntitiesOutputReference <a name="DataDatadogSoftwareCatalogEntitiesOutputReference" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer"></a>

```typescript
import { dataDatadogSoftwareCatalog } from '@cdktf/provider-datadog'

new dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogSoftwareCatalogEntities;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSoftwareCatalog.DataDatadogSoftwareCatalogEntities">DataDatadogSoftwareCatalogEntities</a>

---



