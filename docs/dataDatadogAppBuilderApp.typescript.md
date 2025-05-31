# `dataDatadogAppBuilderApp` Submodule <a name="`dataDatadogAppBuilderApp` Submodule" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAppBuilderApp <a name="DataDatadogAppBuilderApp" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/app_builder_app datadog_app_builder_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

new dataDatadogAppBuilderApp.DataDatadogAppBuilderApp(scope: Construct, id: string, config: DataDatadogAppBuilderAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig">DataDatadogAppBuilderAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig">DataDatadogAppBuilderAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogAppBuilderApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isConstruct"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformElement"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformDataSource"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogAppBuilderApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogAppBuilderApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogAppBuilderApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/app_builder_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogAppBuilderApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.actionQueryNamesToConnectionIds">actionQueryNamesToConnectionIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.appJson">appJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.published">published</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.rootInstanceName">rootInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actionQueryNamesToConnectionIds`<sup>Required</sup> <a name="actionQueryNamesToConnectionIds" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.actionQueryNamesToConnectionIds"></a>

```typescript
public readonly actionQueryNamesToConnectionIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `appJson`<sup>Required</sup> <a name="appJson" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.appJson"></a>

```typescript
public readonly appJson: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.published"></a>

```typescript
public readonly published: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rootInstanceName`<sup>Required</sup> <a name="rootInstanceName" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.rootInstanceName"></a>

```typescript
public readonly rootInstanceName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAppBuilderAppConfig <a name="DataDatadogAppBuilderAppConfig" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.Initializer"></a>

```typescript
import { dataDatadogAppBuilderApp } from '@cdktf/provider-datadog'

const dataDatadogAppBuilderAppConfig: dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.id">id</a></code> | <code>string</code> | ID for the App. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAppBuilderApp.DataDatadogAppBuilderAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID for the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/data-sources/app_builder_app#id DataDatadogAppBuilderApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



