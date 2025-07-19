# `dataDatadogIntegrationAwsAvailableNamespaces` Submodule <a name="`dataDatadogIntegrationAwsAvailableNamespaces` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsAvailableNamespaces <a name="DataDatadogIntegrationAwsAvailableNamespaces" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/integration_aws_available_namespaces datadog_integration_aws_available_namespaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

new dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces(scope: Construct, id: string, config?: DataDatadogIntegrationAwsAvailableNamespacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig">DataDatadogIntegrationAwsAvailableNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig">DataDatadogIntegrationAwsAvailableNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isConstruct"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformElement"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformDataSource"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIntegrationAwsAvailableNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/data-sources/integration_aws_available_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.awsNamespaces">awsNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsNamespaces`<sup>Required</sup> <a name="awsNamespaces" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.awsNamespaces"></a>

```typescript
public readonly awsNamespaces: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsAvailableNamespacesConfig <a name="DataDatadogIntegrationAwsAvailableNamespacesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableNamespaces } from '@cdktf/provider-datadog'

const dataDatadogIntegrationAwsAvailableNamespacesConfig: dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableNamespaces.DataDatadogIntegrationAwsAvailableNamespacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



