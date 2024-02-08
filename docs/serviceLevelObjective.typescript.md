# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktf/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective datadog_service_level_objective}.

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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification">putSliSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">putThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">resetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification">resetSliSpecification</a></code> | *No description.* |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

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

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```typescript
public putQuery(value: ServiceLevelObjectiveQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `putSliSpecification` <a name="putSliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification"></a>

```typescript
public putSliSpecification(value: ServiceLevelObjectiveSliSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

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

##### `resetSliSpecification` <a name="resetSliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification"></a>

```typescript
public resetSliSpecification(): void
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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>". |

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

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

serviceLevelObjective.ServiceLevelObjective.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceLevelObjective to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevelObjective to import is found.

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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification">sliSpecification</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">monitorIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput">sliSpecificationInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |
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

##### `sliSpecification`<sup>Required</sup> <a name="sliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification"></a>

```typescript
public readonly sliSpecification: ServiceLevelObjectiveSliSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a>

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

##### `sliSpecificationInput`<sup>Optional</sup> <a name="sliSpecificationInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput"></a>

```typescript
public readonly sliSpecificationInput: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">monitorIds</a></code> | <code>number[]</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification">sliSpecification</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | sli_specification block. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```typescript
public readonly thresholds: IResolvable | ServiceLevelObjectiveThresholds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>[]

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`, `time_slice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorIds`<sup>Optional</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```typescript
public readonly monitorIds: number[];
```

- *Type:* number[]

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `sliSpecification`<sup>Optional</sup> <a name="sliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification"></a>

```typescript
public readonly sliSpecification: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

sli_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#sli_specification ServiceLevelObjective#sli_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `targetThreshold`<sup>Optional</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```typescript
public readonly targetThreshold: number;
```

- *Type:* number

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to validate the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```typescript
public readonly numerator: string;
```

- *Type:* string

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveSliSpecification <a name="ServiceLevelObjectiveSliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecification: serviceLevelObjective.ServiceLevelObjectiveSliSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice">timeSlice</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | time_slice block. |

---

##### `timeSlice`<sup>Required</sup> <a name="timeSlice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice"></a>

```typescript
public readonly timeSlice: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

time_slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#time_slice ServiceLevelObjective#time_slice}

---

### ServiceLevelObjectiveSliSpecificationTimeSlice <a name="ServiceLevelObjectiveSliSpecificationTimeSlice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSlice: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator">comparator</a></code> | <code>string</code> | The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold">threshold</a></code> | <code>number</code> | The threshold value to which each SLI value will be compared. |

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#comparator ServiceLevelObjective#comparator}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The threshold value to which each SLI value will be compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#threshold ServiceLevelObjective#threshold}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula">formula</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | formula block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query">query</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | query block. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula"></a>

```typescript
public readonly formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

formula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#formula ServiceLevelObjective#formula}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query"></a>

```typescript
public readonly query: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryFormula: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression">formulaExpression</a></code> | <code>string</code> | The formula string, which is an expression involving named queries. |

---

##### `formulaExpression`<sup>Required</sup> <a name="formulaExpression" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression"></a>

```typescript
public readonly formulaExpression: string;
```

- *Type:* string

The formula string, which is an expression involving named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#formula_expression ServiceLevelObjective#formula_expression}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | metric_query block. |

---

##### `metricQuery`<sup>Optional</sup> <a name="metricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#metric_query ServiceLevelObjective#metric_query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

const serviceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery: serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name">name</a></code> | <code>string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query">query</a></code> | <code>string</code> | The metrics query definition. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for metrics queries. Defaults to `"metrics"`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The metrics query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for metrics queries. Defaults to `"metrics"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```typescript
public readonly timeframe: string;
```

- *Type:* string

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```typescript
public readonly warning: number;
```

- *Type:* number

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.36.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

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


### ServiceLevelObjectiveSliSpecificationOutputReference <a name="ServiceLevelObjectiveSliSpecificationOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice">putTimeSlice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeSlice` <a name="putTimeSlice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice"></a>

```typescript
public putTimeSlice(value: ServiceLevelObjectiveSliSpecificationTimeSlice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice">timeSlice</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput">timeSliceInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeSlice`<sup>Required</sup> <a name="timeSlice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice"></a>

```typescript
public readonly timeSlice: ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a>

---

##### `timeSliceInput`<sup>Optional</sup> <a name="timeSliceInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput"></a>

```typescript
public readonly timeSliceInput: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecification;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery">putQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery"></a>

```typescript
public putQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSlice;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput">formulaExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression">formulaExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formulaExpressionInput`<sup>Optional</sup> <a name="formulaExpressionInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput"></a>

```typescript
public readonly formulaExpressionInput: string;
```

- *Type:* string

---

##### `formulaExpression`<sup>Required</sup> <a name="formulaExpression" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression"></a>

```typescript
public readonly formulaExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula">putFormula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery">putQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFormula` <a name="putFormula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula"></a>

```typescript
public putFormula(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery"></a>

```typescript
public putQuery(value: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula">formula</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput">formulaInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput">queryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula"></a>

```typescript
public readonly formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query"></a>

```typescript
public readonly query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a>

---

##### `formulaInput`<sup>Optional</sup> <a name="formulaInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput"></a>

```typescript
public readonly formulaInput: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get"></a>

```typescript
public get(index: number): ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>[]

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSource` <a name="resetDataSource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer"></a>

```typescript
import { serviceLevelObjective } from '@cdktf/provider-datadog'

new serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery">putMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery">resetMetricQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricQuery` <a name="putMetricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery"></a>

```typescript
public putMetricQuery(value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---

##### `resetMetricQuery` <a name="resetMetricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery"></a>

```typescript
public resetMetricQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery">metricQuery</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput">metricQueryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricQuery`<sup>Required</sup> <a name="metricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery"></a>

```typescript
public readonly metricQuery: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a>

---

##### `metricQueryInput`<sup>Optional</sup> <a name="metricQueryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput"></a>

```typescript
public readonly metricQueryInput: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery;
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>

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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a></code> | *No description.* |

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
public readonly internalValue: IResolvable | ServiceLevelObjectiveThresholds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>

---



