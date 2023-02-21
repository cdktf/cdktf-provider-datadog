# `dataDatadogServiceLevelObjective` Submodule <a name="`dataDatadogServiceLevelObjective` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjective <a name="DataDatadogServiceLevelObjective" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjective } from '@cdktf/provider-datadog'

new dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective(scope: Construct, id: string, config?: DataDatadogServiceLevelObjectiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig">DataDatadogServiceLevelObjectiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig">DataDatadogServiceLevelObjectiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery">resetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery">resetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery">resetTagsQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricsQuery` <a name="resetMetricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery"></a>

```typescript
public resetMetricsQuery(): void
```

##### `resetNameQuery` <a name="resetNameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery"></a>

```typescript
public resetNameQuery(): void
```

##### `resetTagsQuery` <a name="resetTagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery"></a>

```typescript
public resetTagsQuery(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct"></a>

```typescript
import { dataDatadogServiceLevelObjective } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement"></a>

```typescript
import { dataDatadogServiceLevelObjective } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource"></a>

```typescript
import { dataDatadogServiceLevelObjective } from '@cdktf/provider-datadog'

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput">metricsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput">nameQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput">tagsQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery">nameQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery">tagsQuery</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput"></a>

```typescript
public readonly metricsQueryInput: string;
```

- *Type:* string

---

##### `nameQueryInput`<sup>Optional</sup> <a name="nameQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput"></a>

```typescript
public readonly nameQueryInput: string;
```

- *Type:* string

---

##### `tagsQueryInput`<sup>Optional</sup> <a name="tagsQueryInput" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput"></a>

```typescript
public readonly tagsQueryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

---

##### `nameQuery`<sup>Required</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery"></a>

```typescript
public readonly nameQuery: string;
```

- *Type:* string

---

##### `tagsQuery`<sup>Required</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery"></a>

```typescript
public readonly tagsQuery: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectiveConfig <a name="DataDatadogServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.Initializer"></a>

```typescript
import { dataDatadogServiceLevelObjective } from '@cdktf/provider-datadog'

const dataDatadogServiceLevelObjectiveConfig: dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id">id</a></code> | <code>string</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery">metricsQuery</a></code> | <code>string</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery">nameQuery</a></code> | <code>string</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery">tagsQuery</a></code> | <code>string</code> | Filter results based on a single SLO tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsQuery`<sup>Optional</sup> <a name="metricsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery"></a>

```typescript
public readonly metricsQuery: string;
```

- *Type:* string

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `nameQuery`<sup>Optional</sup> <a name="nameQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery"></a>

```typescript
public readonly nameQuery: string;
```

- *Type:* string

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tagsQuery`<sup>Optional</sup> <a name="tagsQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery"></a>

```typescript
public readonly tagsQuery: string;
```

- *Type:* string

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---



