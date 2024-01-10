# `dataDatadogSecurityMonitoringFilters` Submodule <a name="`dataDatadogSecurityMonitoringFilters` Submodule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringFilters <a name="DataDatadogSecurityMonitoringFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/data-sources/security_monitoring_filters datadog_security_monitoring_filters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

new dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters(scope: Construct, id: string, config?: DataDatadogSecurityMonitoringFiltersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig">DataDatadogSecurityMonitoringFiltersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig">DataDatadogSecurityMonitoringFiltersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringFilters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/data-sources/security_monitoring_filters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds">filtersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters"></a>

```typescript
public readonly filters: DataDatadogSecurityMonitoringFiltersFiltersList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a>

---

##### `filtersIds`<sup>Required</sup> <a name="filtersIds" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds"></a>

```typescript
public readonly filtersIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringFiltersConfig <a name="DataDatadogSecurityMonitoringFiltersConfig" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

const dataDatadogSecurityMonitoringFiltersConfig: dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSecurityMonitoringFiltersFilters <a name="DataDatadogSecurityMonitoringFiltersFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

const dataDatadogSecurityMonitoringFiltersFilters: dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters = { ... }
```


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

const dataDatadogSecurityMonitoringFiltersFiltersExclusionFilter: dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

new dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get"></a>

```typescript
public get(index: number): DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

new dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a>

---


### DataDatadogSecurityMonitoringFiltersFiltersList <a name="DataDatadogSecurityMonitoringFiltersFiltersList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

new dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get"></a>

```typescript
public get(index: number): DataDatadogSecurityMonitoringFiltersFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogSecurityMonitoringFiltersFiltersOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringFilters } from '@cdktf/provider-datadog'

new dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter">exclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType">filteredDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionFilter`<sup>Required</sup> <a name="exclusionFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter"></a>

```typescript
public readonly exclusionFilter: DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a>

---

##### `filteredDataType`<sup>Required</sup> <a name="filteredDataType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType"></a>

```typescript
public readonly filteredDataType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogSecurityMonitoringFiltersFilters;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a>

---



