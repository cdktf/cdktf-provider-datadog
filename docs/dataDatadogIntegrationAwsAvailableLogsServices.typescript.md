# `dataDatadogIntegrationAwsAvailableLogsServices` Submodule <a name="`dataDatadogIntegrationAwsAvailableLogsServices` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsAvailableLogsServices <a name="DataDatadogIntegrationAwsAvailableLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

new dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices(scope: Construct, id: string, config?: DataDatadogIntegrationAwsAvailableLogsServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig">DataDatadogIntegrationAwsAvailableLogsServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableLogsServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIntegrationAwsAvailableLogsServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/integration_aws_available_logs_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableLogsServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices">awsLogsServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsLogsServices`<sup>Required</sup> <a name="awsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.awsLogsServices"></a>

```typescript
public readonly awsLogsServices: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsAvailableLogsServicesConfig <a name="DataDatadogIntegrationAwsAvailableLogsServicesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.Initializer"></a>

```typescript
import { dataDatadogIntegrationAwsAvailableLogsServices } from '@cdktf/provider-datadog'

const dataDatadogIntegrationAwsAvailableLogsServicesConfig: dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsAvailableLogsServices.DataDatadogIntegrationAwsAvailableLogsServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



