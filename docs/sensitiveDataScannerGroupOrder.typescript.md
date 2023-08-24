# `datadog_sensitive_data_scanner_group_order`

Refer to the Terraform Registory for docs: [`datadog_sensitive_data_scanner_group_order`](https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/sensitive_data_scanner_group_order).

# `sensitiveDataScannerGroupOrder` Submodule <a name="`sensitiveDataScannerGroupOrder` Submodule" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerGroupOrder <a name="SensitiveDataScannerGroupOrder" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer"></a>

```typescript
import { sensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

new sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder(scope: Construct, id: string, config: SensitiveDataScannerGroupOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig">SensitiveDataScannerGroupOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig">SensitiveDataScannerGroupOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct"></a>

```typescript
import { sensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement"></a>

```typescript
import { sensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource"></a>

```typescript
import { sensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIdsInput">groupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIds">groupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `groupIdsInput`<sup>Optional</sup> <a name="groupIdsInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIdsInput"></a>

```typescript
public readonly groupIdsInput: string[];
```

- *Type:* string[]

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIds"></a>

```typescript
public readonly groupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerGroupOrderConfig <a name="SensitiveDataScannerGroupOrderConfig" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.Initializer"></a>

```typescript
import { sensitiveDataScannerGroupOrder } from '@cdktf/provider-datadog'

const sensitiveDataScannerGroupOrderConfig: sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.groupIds">groupIds</a></code> | <code>string[]</code> | The list of Sensitive Data Scanner group IDs, in order. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.groupIds"></a>

```typescript
public readonly groupIds: string[];
```

- *Type:* string[]

The list of Sensitive Data Scanner group IDs, in order.

Logs are tested against the query filter of each index one by one following the order of the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.29.0/docs/resources/sensitive_data_scanner_group_order#group_ids SensitiveDataScannerGroupOrder#group_ids}

---



