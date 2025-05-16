# `dataDatadogIpRanges` Submodule <a name="`dataDatadogIpRanges` Submodule" id="@cdktf/provider-datadog.dataDatadogIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIpRanges <a name="DataDatadogIpRanges" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/ip_ranges datadog_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

new dataDatadogIpRanges.DataDatadogIpRanges(scope: Construct, id: string, config?: DataDatadogIpRangesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig">DataDatadogIpRangesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig">DataDatadogIpRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIpRanges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isConstruct"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

dataDatadogIpRanges.DataDatadogIpRanges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformElement"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

dataDatadogIpRanges.DataDatadogIpRanges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformDataSource"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

dataDatadogIpRanges.DataDatadogIpRanges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogIpRanges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIpRanges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIpRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIpRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.agentsIpv4">agentsIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.agentsIpv6">agentsIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apiIpv4">apiIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apiIpv6">apiIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apmIpv4">apmIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apmIpv6">apmIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.globalIpv4">globalIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.globalIpv6">globalIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.logsIpv4">logsIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.logsIpv6">logsIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.orchestratorIpv4">orchestratorIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.orchestratorIpv6">orchestratorIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.processIpv4">processIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.processIpv6">processIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv4">syntheticsIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv4ByLocation">syntheticsIpv4ByLocation</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv6">syntheticsIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv6ByLocation">syntheticsIpv6ByLocation</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.webhooksIpv4">webhooksIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.webhooksIpv6">webhooksIpv6</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentsIpv4`<sup>Required</sup> <a name="agentsIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.agentsIpv4"></a>

```typescript
public readonly agentsIpv4: string[];
```

- *Type:* string[]

---

##### `agentsIpv6`<sup>Required</sup> <a name="agentsIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.agentsIpv6"></a>

```typescript
public readonly agentsIpv6: string[];
```

- *Type:* string[]

---

##### `apiIpv4`<sup>Required</sup> <a name="apiIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apiIpv4"></a>

```typescript
public readonly apiIpv4: string[];
```

- *Type:* string[]

---

##### `apiIpv6`<sup>Required</sup> <a name="apiIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apiIpv6"></a>

```typescript
public readonly apiIpv6: string[];
```

- *Type:* string[]

---

##### `apmIpv4`<sup>Required</sup> <a name="apmIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apmIpv4"></a>

```typescript
public readonly apmIpv4: string[];
```

- *Type:* string[]

---

##### `apmIpv6`<sup>Required</sup> <a name="apmIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.apmIpv6"></a>

```typescript
public readonly apmIpv6: string[];
```

- *Type:* string[]

---

##### `globalIpv4`<sup>Required</sup> <a name="globalIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.globalIpv4"></a>

```typescript
public readonly globalIpv4: string[];
```

- *Type:* string[]

---

##### `globalIpv6`<sup>Required</sup> <a name="globalIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.globalIpv6"></a>

```typescript
public readonly globalIpv6: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logsIpv4`<sup>Required</sup> <a name="logsIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.logsIpv4"></a>

```typescript
public readonly logsIpv4: string[];
```

- *Type:* string[]

---

##### `logsIpv6`<sup>Required</sup> <a name="logsIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.logsIpv6"></a>

```typescript
public readonly logsIpv6: string[];
```

- *Type:* string[]

---

##### `orchestratorIpv4`<sup>Required</sup> <a name="orchestratorIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.orchestratorIpv4"></a>

```typescript
public readonly orchestratorIpv4: string[];
```

- *Type:* string[]

---

##### `orchestratorIpv6`<sup>Required</sup> <a name="orchestratorIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.orchestratorIpv6"></a>

```typescript
public readonly orchestratorIpv6: string[];
```

- *Type:* string[]

---

##### `processIpv4`<sup>Required</sup> <a name="processIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.processIpv4"></a>

```typescript
public readonly processIpv4: string[];
```

- *Type:* string[]

---

##### `processIpv6`<sup>Required</sup> <a name="processIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.processIpv6"></a>

```typescript
public readonly processIpv6: string[];
```

- *Type:* string[]

---

##### `syntheticsIpv4`<sup>Required</sup> <a name="syntheticsIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv4"></a>

```typescript
public readonly syntheticsIpv4: string[];
```

- *Type:* string[]

---

##### `syntheticsIpv4ByLocation`<sup>Required</sup> <a name="syntheticsIpv4ByLocation" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv4ByLocation"></a>

```typescript
public readonly syntheticsIpv4ByLocation: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `syntheticsIpv6`<sup>Required</sup> <a name="syntheticsIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv6"></a>

```typescript
public readonly syntheticsIpv6: string[];
```

- *Type:* string[]

---

##### `syntheticsIpv6ByLocation`<sup>Required</sup> <a name="syntheticsIpv6ByLocation" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.syntheticsIpv6ByLocation"></a>

```typescript
public readonly syntheticsIpv6ByLocation: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `webhooksIpv4`<sup>Required</sup> <a name="webhooksIpv4" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.webhooksIpv4"></a>

```typescript
public readonly webhooksIpv4: string[];
```

- *Type:* string[]

---

##### `webhooksIpv6`<sup>Required</sup> <a name="webhooksIpv6" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.webhooksIpv6"></a>

```typescript
public readonly webhooksIpv6: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRanges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIpRangesConfig <a name="DataDatadogIpRangesConfig" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.Initializer"></a>

```typescript
import { dataDatadogIpRanges } from '@cdktf/provider-datadog'

const dataDatadogIpRangesConfig: dataDatadogIpRanges.DataDatadogIpRangesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIpRanges.DataDatadogIpRangesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



