# `dataDatadogIntegrationAwsLogsServices` Submodule <a name="`dataDatadogIntegrationAwsLogsServices` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/integration_aws_logs_services datadog_integration_aws_logs_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

new dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices(scope: Construct, id: string, config?: DataDatadogIntegrationAwsLogsServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig">DataDatadogIntegrationAwsLogsServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig">DataDatadogIntegrationAwsLogsServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIntegrationAwsLogsServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogIntegrationAwsLogsServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIntegrationAwsLogsServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIntegrationAwsLogsServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/integration_aws_logs_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsLogsServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices">awsLogsServices</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsLogsServices`<sup>Required</sup> <a name="awsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices"></a>

```typescript
public readonly awsLogsServices: DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

const dataDatadogIntegrationAwsLogsServicesAwsLogsServices: dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices = { ... }
```


### DataDatadogIntegrationAwsLogsServicesConfig <a name="DataDatadogIntegrationAwsLogsServicesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

const dataDatadogIntegrationAwsLogsServicesConfig: dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.58.0/docs/data-sources/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

new dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get"></a>

```typescript
public get(index: number): DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsLogsServices } from '@cdktf/provider-datadog'

new dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogIntegrationAwsLogsServicesAwsLogsServices;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a>

---



