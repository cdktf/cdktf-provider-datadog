# `dataDatadogIncidentNotificationRule` Submodule <a name="`dataDatadogIncidentNotificationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIncidentNotificationRule <a name="DataDatadogIncidentNotificationRule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

new dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule(scope: Construct, id: string, config: DataDatadogIncidentNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions">resetConditions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions"></a>

```typescript
public putConditions(value: IResolvable | DataDatadogIncidentNotificationRuleConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogIncidentNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogIncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles">handles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate">notificationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn">renotifyOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions"></a>

```typescript
public readonly conditions: DataDatadogIncidentNotificationRuleConditionsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles"></a>

```typescript
public readonly handles: string[];
```

- *Type:* string[]

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `notificationTemplate`<sup>Required</sup> <a name="notificationTemplate" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate"></a>

```typescript
public readonly notificationTemplate: string;
```

- *Type:* string

---

##### `renotifyOn`<sup>Required</sup> <a name="renotifyOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn"></a>

```typescript
public readonly renotifyOn: string[];
```

- *Type:* string[]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | DataDatadogIncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIncidentNotificationRuleConditions <a name="DataDatadogIncidentNotificationRuleConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions.Initializer"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

const dataDatadogIncidentNotificationRuleConditions: dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions = { ... }
```


### DataDatadogIncidentNotificationRuleConfig <a name="DataDatadogIncidentNotificationRuleConfig" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.Initializer"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

const dataDatadogIncidentNotificationRuleConfig: dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id">id</a></code> | <code>string</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | conditions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | DataDatadogIncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIncidentNotificationRuleConditionsList <a name="DataDatadogIncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

new dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get"></a>

```typescript
public get(index: number): DataDatadogIncidentNotificationRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogIncidentNotificationRuleConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>[]

---


### DataDatadogIncidentNotificationRuleConditionsOutputReference <a name="DataDatadogIncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```typescript
import { dataDatadogIncidentNotificationRule } from '@cdktf/provider-datadog'

new dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogIncidentNotificationRuleConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>

---



