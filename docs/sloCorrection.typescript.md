# `datadog_slo_correction`

Refer to the Terraform Registory for docs: [`datadog_slo_correction`](https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction).

# `sloCorrection` Submodule <a name="`sloCorrection` Submodule" id="@cdktf/provider-datadog.sloCorrection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SloCorrection <a name="SloCorrection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction datadog_slo_correction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer"></a>

```typescript
import { sloCorrection } from '@cdktf/provider-datadog'

new sloCorrection.SloCorrection(scope: Construct, id: string, config: SloCorrectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule">resetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRrule` <a name="resetRrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule"></a>

```typescript
public resetRrule(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct"></a>

```typescript
import { sloCorrection } from '@cdktf/provider-datadog'

sloCorrection.SloCorrection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement"></a>

```typescript
import { sloCorrection } from '@cdktf/provider-datadog'

sloCorrection.SloCorrection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource"></a>

```typescript
import { sloCorrection } from '@cdktf/provider-datadog'

sloCorrection.SloCorrection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput">rruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput">sloIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId">sloId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput"></a>

```typescript
public readonly rruleInput: string;
```

- *Type:* string

---

##### `sloIdInput`<sup>Optional</sup> <a name="sloIdInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput"></a>

```typescript
public readonly sloIdInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId"></a>

```typescript
public readonly sloId: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SloCorrectionConfig <a name="SloCorrectionConfig" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.Initializer"></a>

```typescript
import { sloCorrection } from '@cdktf/provider-datadog'

const sloCorrectionConfig: sloCorrection.SloCorrectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category">category</a></code> | <code>string</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId">sloId</a></code> | <code>string</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start">start</a></code> | <code>number</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description">description</a></code> | <code>string</code> | Description of the correction being made. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration">duration</a></code> | <code>number</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end">end</a></code> | <code>number</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule">rrule</a></code> | <code>string</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone">timezone</a></code> | <code>string</code> | The timezone to display in the UI for the correction times (defaults to "UTC"). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#category SloCorrection#category}

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId"></a>

```typescript
public readonly sloId: string;
```

- *Type:* string

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#start SloCorrection#start}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#description SloCorrection#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#end SloCorrection#end}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The timezone to display in the UI for the correction times (defaults to "UTC").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/slo_correction#timezone SloCorrection#timezone}

---



