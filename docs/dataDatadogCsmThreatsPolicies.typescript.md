# `dataDatadogCsmThreatsPolicies` Submodule <a name="`dataDatadogCsmThreatsPolicies` Submodule" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCsmThreatsPolicies <a name="DataDatadogCsmThreatsPolicies" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/csm_threats_policies datadog_csm_threats_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies(scope: Construct, id: string, config?: DataDatadogCsmThreatsPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig">DataDatadogCsmThreatsPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig">DataDatadogCsmThreatsPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCsmThreatsPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isConstruct"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformElement"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogCsmThreatsPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCsmThreatsPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCsmThreatsPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/csm_threats_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCsmThreatsPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList">DataDatadogCsmThreatsPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.policyIds">policyIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatadogCsmThreatsPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList">DataDatadogCsmThreatsPoliciesPoliciesList</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.policyIds"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCsmThreatsPoliciesConfig <a name="DataDatadogCsmThreatsPoliciesConfig" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsPoliciesConfig: dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatadogCsmThreatsPoliciesPolicies <a name="DataDatadogCsmThreatsPoliciesPolicies" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsPoliciesPolicies: dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCsmThreatsPoliciesPoliciesList <a name="DataDatadogCsmThreatsPoliciesPoliciesList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatadogCsmThreatsPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogCsmThreatsPoliciesPoliciesOutputReference <a name="DataDatadogCsmThreatsPoliciesPoliciesOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsPolicies } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.hostTagsLists">hostTagsLists</a></code> | <code>cdktf.StringListList</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPolicies">DataDatadogCsmThreatsPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostTagsLists`<sup>Required</sup> <a name="hostTagsLists" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.hostTagsLists"></a>

```typescript
public readonly hostTagsLists: StringListList;
```

- *Type:* cdktf.StringListList

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCsmThreatsPoliciesPolicies;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsPolicies.DataDatadogCsmThreatsPoliciesPolicies">DataDatadogCsmThreatsPoliciesPolicies</a>

---



