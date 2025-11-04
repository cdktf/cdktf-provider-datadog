# `dataDatadogGcpUcConfig` Submodule <a name="`dataDatadogGcpUcConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogGcpUcConfig <a name="DataDatadogGcpUcConfig" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config datadog_gcp_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

new dataDatadogGcpUcConfig.DataDatadogGcpUcConfig(scope: Construct, id: string, config: DataDatadogGcpUcConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig">DataDatadogGcpUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig">DataDatadogGcpUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogGcpUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogGcpUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogGcpUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogGcpUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogGcpUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportPrefix">exportPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportProjectName">exportProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.months">months</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `exportPrefix`<sup>Required</sup> <a name="exportPrefix" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportPrefix"></a>

```typescript
public readonly exportPrefix: string;
```

- *Type:* string

---

##### `exportProjectName`<sup>Required</sup> <a name="exportProjectName" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.exportProjectName"></a>

```typescript
public readonly exportProjectName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.months"></a>

```typescript
public readonly months: number;
```

- *Type:* number

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountIdInput"></a>

```typescript
public readonly cloudAccountIdInput: number;
```

- *Type:* number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogGcpUcConfigConfig <a name="DataDatadogGcpUcConfigConfig" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.Initializer"></a>

```typescript
import { dataDatadogGcpUcConfig } from '@cdktf/provider-datadog'

const dataDatadogGcpUcConfigConfig: dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | The Datadog cloud account ID for the GCP Usage Cost configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogGcpUcConfig.DataDatadogGcpUcConfigConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

The Datadog cloud account ID for the GCP Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/gcp_uc_config#cloud_account_id DataDatadogGcpUcConfig#cloud_account_id}

---



