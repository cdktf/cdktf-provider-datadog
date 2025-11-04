# `dataDatadogAzureUcConfig` Submodule <a name="`dataDatadogAzureUcConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAzureUcConfig <a name="DataDatadogAzureUcConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

new dataDatadogAzureUcConfig.DataDatadogAzureUcConfig(scope: Construct, id: string, config: DataDatadogAzureUcConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig">DataDatadogAzureUcConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig">DataDatadogAzureUcConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogAzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogAzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogAzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages">errorMessages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig"></a>

```typescript
public readonly actualBillConfig: DataDatadogAzureUcConfigActualBillConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig"></a>

```typescript
public readonly amortizedBillConfig: DataDatadogAzureUcConfigAmortizedBillConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt"></a>

```typescript
public readonly statusUpdatedAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput"></a>

```typescript
public readonly cloudAccountIdInput: number;
```

- *Type:* number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAzureUcConfigActualBillConfig <a name="DataDatadogAzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

const dataDatadogAzureUcConfigActualBillConfig: dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig = { ... }
```


### DataDatadogAzureUcConfigAmortizedBillConfig <a name="DataDatadogAzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

const dataDatadogAzureUcConfigAmortizedBillConfig: dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig = { ... }
```


### DataDatadogAzureUcConfigConfig <a name="DataDatadogAzureUcConfigConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

const dataDatadogAzureUcConfigConfig: dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>number</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId"></a>

```typescript
public readonly cloudAccountId: number;
```

- *Type:* number

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAzureUcConfigActualBillConfigOutputReference <a name="DataDatadogAzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

new dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName">exportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogAzureUcConfigActualBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a>

---


### DataDatadogAzureUcConfigAmortizedBillConfigOutputReference <a name="DataDatadogAzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```typescript
import { dataDatadogAzureUcConfig } from '@cdktf/provider-datadog'

new dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName">exportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```typescript
public readonly storageContainer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogAzureUcConfigAmortizedBillConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a>

---



