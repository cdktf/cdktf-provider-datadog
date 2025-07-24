# `dataDatadogCsmThreatsAgentRules` Submodule <a name="`dataDatadogCsmThreatsAgentRules` Submodule" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCsmThreatsAgentRules <a name="DataDatadogCsmThreatsAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/csm_threats_agent_rules datadog_csm_threats_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules(scope: Construct, id: string, config?: DataDatadogCsmThreatsAgentRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogCsmThreatsAgentRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogCsmThreatsAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/csm_threats_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCsmThreatsAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules">agentRules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds">agentRulesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentRules`<sup>Required</sup> <a name="agentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules"></a>

```typescript
public readonly agentRules: DataDatadogCsmThreatsAgentRulesAgentRulesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a>

---

##### `agentRulesIds`<sup>Required</sup> <a name="agentRulesIds" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds"></a>

```typescript
public readonly agentRulesIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCsmThreatsAgentRulesAgentRules <a name="DataDatadogCsmThreatsAgentRulesAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsAgentRulesAgentRules: dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules = { ... }
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActions <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsAgentRulesAgentRulesActions: dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions = { ... }
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsAgentRulesAgentRulesActionsHash: dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash = { ... }
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsAgentRulesAgentRulesActionsSet: dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet = { ... }
```


### DataDatadogCsmThreatsAgentRulesConfig <a name="DataDatadogCsmThreatsAgentRulesConfig" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

const dataDatadogCsmThreatsAgentRulesConfig: dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId">policyId</a></code> | <code>string</code> | Listing only the rules in the policy with this field as the ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Listing only the rules in the policy with this field as the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/csm_threats_agent_rules#policy_id DataDatadogCsmThreatsAgentRules#policy_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get"></a>

```typescript
public get(index: number): DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set">set</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash"></a>

```typescript
public readonly hash: DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set"></a>

```typescript
public readonly set: DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCsmThreatsAgentRulesAgentRulesActions;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append">append</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append"></a>

```typescript
public readonly append: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get"></a>

```typescript
public get(index: number): DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer"></a>

```typescript
import { dataDatadogCsmThreatsAgentRules } from '@cdktf/provider-datadog'

new dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags">productTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataDatadogCsmThreatsAgentRulesAgentRulesActionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productTags`<sup>Required</sup> <a name="productTags" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags"></a>

```typescript
public readonly productTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogCsmThreatsAgentRulesAgentRules;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a>

---



