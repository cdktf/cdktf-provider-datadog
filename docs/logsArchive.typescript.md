# `datadog_logs_archive`

Refer to the Terraform Registory for docs: [`datadog_logs_archive`](https://www.terraform.io/docs/providers/datadog/r/logs_archive).

# `logsArchive` Submodule <a name="`logsArchive` Submodule" id="@cdktf/provider-datadog.logsArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsArchive <a name="LogsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive datadog_logs_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

new logsArchive.LogsArchive(scope: Construct, id: string, config: LogsArchiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig">LogsArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig">LogsArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive">putAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive">putGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive">putS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive">resetAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive">resetGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags">resetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb">resetRehydrationMaxScanSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags">resetRehydrationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive">resetS3Archive</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAzureArchive` <a name="putAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive"></a>

```typescript
public putAzureArchive(value: LogsArchiveAzureArchive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `putGcsArchive` <a name="putGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive"></a>

```typescript
public putGcsArchive(value: LogsArchiveGcsArchive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `putS3Archive` <a name="putS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive"></a>

```typescript
public putS3Archive(value: LogsArchiveS3Archive): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `resetAzureArchive` <a name="resetAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive"></a>

```typescript
public resetAzureArchive(): void
```

##### `resetGcsArchive` <a name="resetGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive"></a>

```typescript
public resetGcsArchive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeTags` <a name="resetIncludeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags"></a>

```typescript
public resetIncludeTags(): void
```

##### `resetRehydrationMaxScanSizeInGb` <a name="resetRehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb"></a>

```typescript
public resetRehydrationMaxScanSizeInGb(): void
```

##### `resetRehydrationTags` <a name="resetRehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags"></a>

```typescript
public resetRehydrationTags(): void
```

##### `resetS3Archive` <a name="resetS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive"></a>

```typescript
public resetS3Archive(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

logsArchive.LogsArchive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

logsArchive.LogsArchive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

logsArchive.LogsArchive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive">azureArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive">gcsArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive">s3Archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput">azureArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput">gcsArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput">includeTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput">rehydrationMaxScanSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput">rehydrationTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput">s3ArchiveInput</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags">includeTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb">rehydrationMaxScanSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags">rehydrationTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureArchive`<sup>Required</sup> <a name="azureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive"></a>

```typescript
public readonly azureArchive: LogsArchiveAzureArchiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a>

---

##### `gcsArchive`<sup>Required</sup> <a name="gcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive"></a>

```typescript
public readonly gcsArchive: LogsArchiveGcsArchiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a>

---

##### `s3Archive`<sup>Required</sup> <a name="s3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive"></a>

```typescript
public readonly s3Archive: LogsArchiveS3ArchiveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a>

---

##### `azureArchiveInput`<sup>Optional</sup> <a name="azureArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput"></a>

```typescript
public readonly azureArchiveInput: LogsArchiveAzureArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `gcsArchiveInput`<sup>Optional</sup> <a name="gcsArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput"></a>

```typescript
public readonly gcsArchiveInput: LogsArchiveGcsArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeTagsInput`<sup>Optional</sup> <a name="includeTagsInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput"></a>

```typescript
public readonly includeTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `rehydrationMaxScanSizeInGbInput`<sup>Optional</sup> <a name="rehydrationMaxScanSizeInGbInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput"></a>

```typescript
public readonly rehydrationMaxScanSizeInGbInput: number;
```

- *Type:* number

---

##### `rehydrationTagsInput`<sup>Optional</sup> <a name="rehydrationTagsInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput"></a>

```typescript
public readonly rehydrationTagsInput: string[];
```

- *Type:* string[]

---

##### `s3ArchiveInput`<sup>Optional</sup> <a name="s3ArchiveInput" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput"></a>

```typescript
public readonly s3ArchiveInput: LogsArchiveS3Archive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags"></a>

```typescript
public readonly includeTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `rehydrationMaxScanSizeInGb`<sup>Required</sup> <a name="rehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb"></a>

```typescript
public readonly rehydrationMaxScanSizeInGb: number;
```

- *Type:* number

---

##### `rehydrationTags`<sup>Required</sup> <a name="rehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags"></a>

```typescript
public readonly rehydrationTags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsArchiveAzureArchive <a name="LogsArchiveAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

const logsArchiveAzureArchive: logsArchive.LogsArchiveAzureArchive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId">clientId</a></code> | <code>string</code> | Your client id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container">container</a></code> | <code>string</code> | The container where the archive is stored. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount">storageAccount</a></code> | <code>string</code> | The associated storage account. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId">tenantId</a></code> | <code>string</code> | Your tenant id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path">path</a></code> | <code>string</code> | The path where the archive is stored. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Your client id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#client_id LogsArchive#client_id}

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

The container where the archive is stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#container LogsArchive#container}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

The associated storage account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#storage_account LogsArchive#storage_account}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Your tenant id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#tenant_id LogsArchive#tenant_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path where the archive is stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#path LogsArchive#path}

---

### LogsArchiveConfig <a name="LogsArchiveConfig" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

const logsArchiveConfig: logsArchive.LogsArchiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name">name</a></code> | <code>string</code> | Your archive name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query">query</a></code> | <code>string</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive">azureArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive">gcsArchive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags">includeTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb">rehydrationMaxScanSizeInGb</a></code> | <code>number</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags">rehydrationTags</a></code> | <code>string[]</code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive">s3Archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Your archive name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#name LogsArchive#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#query LogsArchive#query}

---

##### `azureArchive`<sup>Optional</sup> <a name="azureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive"></a>

```typescript
public readonly azureArchive: LogsArchiveAzureArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `gcsArchive`<sup>Optional</sup> <a name="gcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive"></a>

```typescript
public readonly gcsArchive: LogsArchiveGcsArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags"></a>

```typescript
public readonly includeTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#include_tags LogsArchive#include_tags}

---

##### `rehydrationMaxScanSizeInGb`<sup>Optional</sup> <a name="rehydrationMaxScanSizeInGb" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb"></a>

```typescript
public readonly rehydrationMaxScanSizeInGb: number;
```

- *Type:* number

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `rehydrationTags`<sup>Optional</sup> <a name="rehydrationTags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags"></a>

```typescript
public readonly rehydrationTags: string[];
```

- *Type:* string[]

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `s3Archive`<sup>Optional</sup> <a name="s3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive"></a>

```typescript
public readonly s3Archive: LogsArchiveS3Archive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#s3_archive LogsArchive#s3_archive}

---

### LogsArchiveGcsArchive <a name="LogsArchiveGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

const logsArchiveGcsArchive: logsArchive.LogsArchiveGcsArchive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket">bucket</a></code> | <code>string</code> | Name of your GCS bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail">clientEmail</a></code> | <code>string</code> | Your client email. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId">projectId</a></code> | <code>string</code> | Your project id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path">path</a></code> | <code>string</code> | Path where the archive is stored. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Name of your GCS bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#bucket LogsArchive#bucket}

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Your client email.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#client_email LogsArchive#client_email}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Your project id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#project_id LogsArchive#project_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where the archive is stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#path LogsArchive#path}

---

### LogsArchiveS3Archive <a name="LogsArchiveS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

const logsArchiveS3Archive: logsArchive.LogsArchiveS3Archive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId">accountId</a></code> | <code>string</code> | Your AWS account id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket">bucket</a></code> | <code>string</code> | Name of your s3 bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName">roleName</a></code> | <code>string</code> | Your AWS role name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path">path</a></code> | <code>string</code> | Path where the archive is stored. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Your AWS account id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#account_id LogsArchive#account_id}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Name of your s3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#bucket LogsArchive#bucket}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Your AWS role name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#role_name LogsArchive#role_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where the archive is stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive#path LogsArchive#path}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsArchiveAzureArchiveOutputReference <a name="LogsArchiveAzureArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

new logsArchive.LogsArchiveAzureArchiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogsArchiveAzureArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---


### LogsArchiveGcsArchiveOutputReference <a name="LogsArchiveGcsArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

new logsArchive.LogsArchiveGcsArchiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogsArchiveGcsArchive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---


### LogsArchiveS3ArchiveOutputReference <a name="LogsArchiveS3ArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer"></a>

```typescript
import { logsArchive } from '@cdktf/provider-datadog'

new logsArchive.LogsArchiveS3ArchiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogsArchiveS3Archive;
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---



