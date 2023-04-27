# `datadog_service_level_objective`

Refer to the Terraform Registory for docs: [`datadog_service_level_objective`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective).

# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktf/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjective(scope: Construct, id: string, config: ServiceLevelObjectiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">putThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">resetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold">resetTargetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe">resetTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```typescript
public putQuery(value: ServiceLevelObjectiveQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `putThresholds` <a name="putThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds"></a>

```typescript
public putThresholds(value: IResolvable | ServiceLevelObjectiveThresholds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonitorIds` <a name="resetMonitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds"></a>

```typescript
public resetMonitorIds(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetThreshold` <a name="resetTargetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold"></a>

```typescript
public resetTargetThreshold(): void
```

##### `resetTimeframe` <a name="resetTimeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe"></a>

```typescript
public resetTimeframe(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate"></a>

```typescript
public resetValidate(): void
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold"></a>

```typescript
public resetWarningThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">monitorIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput">targetThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput">thresholdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput">timeframeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput">validateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput">warningThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds">monitorIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold">targetThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a>

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds"></a>

```typescript
public readonly thresholds: ServiceLevelObjectiveThresholdsList;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitorIdsInput`<sup>Optional</sup> <a name="monitorIdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput"></a>

```typescript
public readonly monitorIdsInput: number[];
```

- *Type:* number[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput"></a>

```typescript
public readonly queryInput: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `targetThresholdInput`<sup>Optional</sup> <a name="targetThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput"></a>

```typescript
public readonly targetThresholdInput: number;
```

- *Type:* number

---

##### `thresholdsInput`<sup>Optional</sup> <a name="thresholdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput"></a>

```typescript
public readonly thresholdsInput: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput"></a>

```typescript
public readonly timeframeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput"></a>

```typescript
public readonly warningThresholdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorIds`<sup>Required</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds"></a>

```typescript
public readonly monitorIds: number[];
```

- *Type:* number[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `targetThreshold`<sup>Required</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold"></a>

```typescript
public readonly targetThreshold: number;
```

- *Type:* number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelObjectiveConfig <a name="ServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveConfig: serviceLevelObjective.ServiceLevelObjectiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name">name</a></code> | <code>string</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds">thresholds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type">type</a></code> | <code>string</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description">description</a></code> | <code>string</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups">groups</a></code> | <code>string[]</code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">monitorIds</a></code> | <code>number[]</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold">targetThreshold</a></code> | <code>number</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe">timeframe</a></code> | <code>string</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to validate the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | The objective's warning value in `(0,100)`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```typescript
public readonly thresholds: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorIds`<sup>Optional</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```typescript
public readonly monitorIds: number[];
```

- *Type:* number[]

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `targetThreshold`<sup>Optional</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```typescript
public readonly targetThreshold: number;
```

- *Type:* number

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to validate the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

### ServiceLevelObjectiveQuery <a name="ServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveQuery: serviceLevelObjective.ServiceLevelObjectiveQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator">denominator</a></code> | <code>string</code> | The sum of the `total` events. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator">numerator</a></code> | <code>string</code> | The sum of all the `good` events. |

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator"></a>

```typescript
public readonly denominator: string;
```

- *Type:* string

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```typescript
public readonly numerator: string;
```

- *Type:* string

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveThresholds <a name="ServiceLevelObjectiveThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveThresholds: serviceLevelObjective.ServiceLevelObjectiveThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target">target</a></code> | <code>number</code> | The objective's target in `(0,100)`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe">timeframe</a></code> | <code>string</code> | The time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning">warning</a></code> | <code>number</code> | The objective's warning value in `(0,100)`. This must be greater than the target value. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

The objective's target in `(0,100)`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* number

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelObjectiveQueryOutputReference <a name="ServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput">denominatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput">numeratorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denominatorInput`<sup>Optional</sup> <a name="denominatorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput"></a>

```typescript
public readonly denominatorInput: string;
```

- *Type:* string

---

##### `numeratorInput`<sup>Optional</sup> <a name="numeratorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput"></a>

```typescript
public readonly numeratorInput: string;
```

- *Type:* string

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```typescript
public readonly denominator: string;
```

- *Type:* string

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```typescript
public readonly numerator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---


### ServiceLevelObjectiveThresholdsList <a name="ServiceLevelObjectiveThresholdsList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveThresholdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get"></a>

```typescript
public get(index: number): ServiceLevelObjectiveThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

---


### ServiceLevelObjectiveThresholdsOutputReference <a name="ServiceLevelObjectiveThresholdsOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay">targetDisplay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay">warningDisplay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput">timeframeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput">warningInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe">timeframe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning">warning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetDisplay`<sup>Required</sup> <a name="targetDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay"></a>

```typescript
public readonly targetDisplay: string;
```

- *Type:* string

---

##### `warningDisplay`<sup>Required</sup> <a name="warningDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay"></a>

```typescript
public readonly warningDisplay: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput"></a>

```typescript
public readonly timeframeInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveThresholds | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a> | cdktf.IResolvable

---



