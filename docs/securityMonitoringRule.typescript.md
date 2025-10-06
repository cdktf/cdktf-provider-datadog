# `securityMonitoringRule` Submodule <a name="`securityMonitoringRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRule <a name="SecurityMonitoringRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRule(scope: Construct, id: string, config: SecurityMonitoringRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig">SecurityMonitoringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig">SecurityMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField">putCalculatedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase">putCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables">putReferenceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions">putSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery">putSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase">putThirdPartyCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField">resetCalculatedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase">resetCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy">resetGroupSignalsBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle">resetHasExtendedTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables">resetReferenceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions">resetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery">resetSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase">resetThirdPartyCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCalculatedField` <a name="putCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField"></a>

```typescript
public putCalculatedField(value: IResolvable | SecurityMonitoringRuleCalculatedField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]

---

##### `putCase` <a name="putCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase"></a>

```typescript
public putCase(value: IResolvable | SecurityMonitoringRuleCase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter"></a>

```typescript
public putFilter(value: IResolvable | SecurityMonitoringRuleFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions"></a>

```typescript
public putOptions(value: SecurityMonitoringRuleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery"></a>

```typescript
public putQuery(value: IResolvable | SecurityMonitoringRuleQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]

---

##### `putReferenceTables` <a name="putReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables"></a>

```typescript
public putReferenceTables(value: IResolvable | SecurityMonitoringRuleReferenceTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]

---

##### `putSchedulingOptions` <a name="putSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions"></a>

```typescript
public putSchedulingOptions(value: SecurityMonitoringRuleSchedulingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---

##### `putSignalQuery` <a name="putSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery"></a>

```typescript
public putSignalQuery(value: IResolvable | SecurityMonitoringRuleSignalQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]

---

##### `putThirdPartyCase` <a name="putThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase"></a>

```typescript
public putThirdPartyCase(value: IResolvable | SecurityMonitoringRuleThirdPartyCase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]

---

##### `resetCalculatedField` <a name="resetCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField"></a>

```typescript
public resetCalculatedField(): void
```

##### `resetCase` <a name="resetCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase"></a>

```typescript
public resetCase(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupSignalsBy` <a name="resetGroupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy"></a>

```typescript
public resetGroupSignalsBy(): void
```

##### `resetHasExtendedTitle` <a name="resetHasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle"></a>

```typescript
public resetHasExtendedTitle(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetReferenceTables` <a name="resetReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables"></a>

```typescript
public resetReferenceTables(): void
```

##### `resetSchedulingOptions` <a name="resetSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions"></a>

```typescript
public resetSchedulingOptions(): void
```

##### `resetSignalQuery` <a name="resetSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery"></a>

```typescript
public resetSignalQuery(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThirdPartyCase` <a name="resetThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase"></a>

```typescript
public resetThirdPartyCase(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate"></a>

```typescript
public resetValidate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

securityMonitoringRule.SecurityMonitoringRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

securityMonitoringRule.SecurityMonitoringRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

securityMonitoringRule.SecurityMonitoringRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField">calculatedField</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables">referenceTables</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery">signalQuery</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase">thirdPartyCase</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput">calculatedFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput">caseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput">groupSignalsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput">hasExtendedTitleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput">queryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput">referenceTablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput">schedulingOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput">signalQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput">thirdPartyCaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput">validateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy">groupSignalsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle">hasExtendedTitle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `calculatedField`<sup>Required</sup> <a name="calculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField"></a>

```typescript
public readonly calculatedField: SecurityMonitoringRuleCalculatedFieldList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case"></a>

```typescript
public readonly case: SecurityMonitoringRuleCaseList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter"></a>

```typescript
public readonly filter: SecurityMonitoringRuleFilterList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options"></a>

```typescript
public readonly options: SecurityMonitoringRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query"></a>

```typescript
public readonly query: SecurityMonitoringRuleQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a>

---

##### `referenceTables`<sup>Required</sup> <a name="referenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables"></a>

```typescript
public readonly referenceTables: SecurityMonitoringRuleReferenceTablesList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a>

---

##### `schedulingOptions`<sup>Required</sup> <a name="schedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions"></a>

```typescript
public readonly schedulingOptions: SecurityMonitoringRuleSchedulingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a>

---

##### `signalQuery`<sup>Required</sup> <a name="signalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery"></a>

```typescript
public readonly signalQuery: SecurityMonitoringRuleSignalQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a>

---

##### `thirdPartyCase`<sup>Required</sup> <a name="thirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase"></a>

```typescript
public readonly thirdPartyCase: SecurityMonitoringRuleThirdPartyCaseList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a>

---

##### `calculatedFieldInput`<sup>Optional</sup> <a name="calculatedFieldInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput"></a>

```typescript
public readonly calculatedFieldInput: IResolvable | SecurityMonitoringRuleCalculatedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]

---

##### `caseInput`<sup>Optional</sup> <a name="caseInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput"></a>

```typescript
public readonly caseInput: IResolvable | SecurityMonitoringRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | SecurityMonitoringRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]

---

##### `groupSignalsByInput`<sup>Optional</sup> <a name="groupSignalsByInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput"></a>

```typescript
public readonly groupSignalsByInput: string[];
```

- *Type:* string[]

---

##### `hasExtendedTitleInput`<sup>Optional</sup> <a name="hasExtendedTitleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput"></a>

```typescript
public readonly hasExtendedTitleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput"></a>

```typescript
public readonly optionsInput: SecurityMonitoringRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | SecurityMonitoringRuleQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]

---

##### `referenceTablesInput`<sup>Optional</sup> <a name="referenceTablesInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput"></a>

```typescript
public readonly referenceTablesInput: IResolvable | SecurityMonitoringRuleReferenceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]

---

##### `schedulingOptionsInput`<sup>Optional</sup> <a name="schedulingOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput"></a>

```typescript
public readonly schedulingOptionsInput: SecurityMonitoringRuleSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---

##### `signalQueryInput`<sup>Optional</sup> <a name="signalQueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput"></a>

```typescript
public readonly signalQueryInput: IResolvable | SecurityMonitoringRuleSignalQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `thirdPartyCaseInput`<sup>Optional</sup> <a name="thirdPartyCaseInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput"></a>

```typescript
public readonly thirdPartyCaseInput: IResolvable | SecurityMonitoringRuleThirdPartyCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupSignalsBy`<sup>Required</sup> <a name="groupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy"></a>

```typescript
public readonly groupSignalsBy: string[];
```

- *Type:* string[]

---

##### `hasExtendedTitle`<sup>Required</sup> <a name="hasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle"></a>

```typescript
public readonly hasExtendedTitle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleCalculatedField <a name="SecurityMonitoringRuleCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleCalculatedField: securityMonitoringRule.SecurityMonitoringRuleCalculatedField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression">expression</a></code> | <code>string</code> | Expression. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name">name</a></code> | <code>string</code> | Field name. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleCase <a name="SecurityMonitoringRuleCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleCase: securityMonitoringRule.SecurityMonitoringRuleCase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status">status</a></code> | <code>string</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition">condition</a></code> | <code>string</code> | A rule case contains logical operations (`>`,`>=`, `&&`, `\|\|`) to determine if a signal should be generated based on the event counts in the previously defined queries. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name">name</a></code> | <code>string</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications">notifications</a></code> | <code>string[]</code> | Notification targets for each rule case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action"></a>

```typescript
public readonly action: IResolvable | SecurityMonitoringRuleCaseAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

### SecurityMonitoringRuleCaseAction <a name="SecurityMonitoringRuleCaseAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleCaseAction: securityMonitoringRule.SecurityMonitoringRuleCaseAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type">type</a></code> | <code>string</code> | Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | options block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options"></a>

```typescript
public readonly options: SecurityMonitoringRuleCaseActionOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

### SecurityMonitoringRuleCaseActionOptions <a name="SecurityMonitoringRuleCaseActionOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleCaseActionOptions: securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration">duration</a></code> | <code>number</code> | Duration of the action in seconds. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Duration of the action in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}

---

### SecurityMonitoringRuleConfig <a name="SecurityMonitoringRuleConfig" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleConfig: securityMonitoringRule.SecurityMonitoringRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message">message</a></code> | <code>string</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField">calculatedField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]</code> | calculated_field block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case">case</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy">groupSignalsBy</a></code> | <code>string[]</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle">hasExtendedTitle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query">query</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]</code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables">referenceTables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]</code> | reference_tables block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery">signalQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]</code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase">thirdPartyCase</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]</code> | third_party_case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type">type</a></code> | <code>string</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to validate the Rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `calculatedField`<sup>Optional</sup> <a name="calculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField"></a>

```typescript
public readonly calculatedField: IResolvable | SecurityMonitoringRuleCalculatedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case"></a>

```typescript
public readonly case: IResolvable | SecurityMonitoringRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | SecurityMonitoringRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `groupSignalsBy`<sup>Optional</sup> <a name="groupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy"></a>

```typescript
public readonly groupSignalsBy: string[];
```

- *Type:* string[]

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `hasExtendedTitle`<sup>Optional</sup> <a name="hasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle"></a>

```typescript
public readonly hasExtendedTitle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options"></a>

```typescript
public readonly options: SecurityMonitoringRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query"></a>

```typescript
public readonly query: IResolvable | SecurityMonitoringRuleQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `referenceTables`<sup>Optional</sup> <a name="referenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables"></a>

```typescript
public readonly referenceTables: IResolvable | SecurityMonitoringRuleReferenceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `schedulingOptions`<sup>Optional</sup> <a name="schedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions"></a>

```typescript
public readonly schedulingOptions: SecurityMonitoringRuleSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `signalQuery`<sup>Optional</sup> <a name="signalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery"></a>

```typescript
public readonly signalQuery: IResolvable | SecurityMonitoringRuleSignalQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags for generated signals.

Note: if default tags are present at provider level, they will be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `thirdPartyCase`<sup>Optional</sup> <a name="thirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase"></a>

```typescript
public readonly thirdPartyCase: IResolvable | SecurityMonitoringRuleThirdPartyCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

### SecurityMonitoringRuleFilter <a name="SecurityMonitoringRuleFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleFilter: securityMonitoringRule.SecurityMonitoringRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action">action</a></code> | <code>string</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query">query</a></code> | <code>string</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

### SecurityMonitoringRuleOptions <a name="SecurityMonitoringRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleOptions: securityMonitoringRule.SecurityMonitoringRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod">detectionMethod</a></code> | <code>string</code> | The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow">evaluationWindow</a></code> | <code>number</code> | A time window is specified to match when at least one of the cases matches true. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions">impossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | impossible_travel_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive">keepAlive</a></code> | <code>number</code> | Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration">maxSignalDuration</a></code> | <code>number</code> | A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions">newValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | new_value_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions">thirdPartyRuleOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | third_party_rule_options block. |

---

##### `decreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

##### `detectionMethod`<sup>Optional</sup> <a name="detectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod"></a>

```typescript
public readonly detectionMethod: string;
```

- *Type:* string

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: number;
```

- *Type:* number

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

##### `impossibleTravelOptions`<sup>Optional</sup> <a name="impossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions"></a>

```typescript
public readonly impossibleTravelOptions: SecurityMonitoringRuleOptionsImpossibleTravelOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

##### `keepAlive`<sup>Optional</sup> <a name="keepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive"></a>

```typescript
public readonly keepAlive: number;
```

- *Type:* number

Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

##### `maxSignalDuration`<sup>Optional</sup> <a name="maxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration"></a>

```typescript
public readonly maxSignalDuration: number;
```

- *Type:* number

A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

##### `newValueOptions`<sup>Optional</sup> <a name="newValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions"></a>

```typescript
public readonly newValueOptions: SecurityMonitoringRuleOptionsNewValueOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

##### `thirdPartyRuleOptions`<sup>Optional</sup> <a name="thirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions"></a>

```typescript
public readonly thirdPartyRuleOptions: SecurityMonitoringRuleOptionsThirdPartyRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

third_party_rule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}

---

### SecurityMonitoringRuleOptionsImpossibleTravelOptions <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleOptionsImpossibleTravelOptions: securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations">baselineUserLocations</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, signals are suppressed for the first 24 hours. |

---

##### `baselineUserLocations`<sup>Optional</sup> <a name="baselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations"></a>

```typescript
public readonly baselineUserLocations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

### SecurityMonitoringRuleOptionsNewValueOptions <a name="SecurityMonitoringRuleOptionsNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleOptionsNewValueOptions: securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter">forgetAfter</a></code> | <code>number</code> | The duration in days after which a learned value is forgotten. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration">learningDuration</a></code> | <code>number</code> | The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod">learningMethod</a></code> | <code>string</code> | The learning method used to determine when signals should be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold">learningThreshold</a></code> | <code>number</code> | A number of occurrences after which signals are generated for values that weren't learned. |

---

##### `forgetAfter`<sup>Required</sup> <a name="forgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter"></a>

```typescript
public readonly forgetAfter: number;
```

- *Type:* number

The duration in days after which a learned value is forgotten.

Valid values are `1`, `2`, `7`, `14`, `21`, `28`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

##### `learningDuration`<sup>Optional</sup> <a name="learningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration"></a>

```typescript
public readonly learningDuration: number;
```

- *Type:* number

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `learningMethod`<sup>Optional</sup> <a name="learningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod"></a>

```typescript
public readonly learningMethod: string;
```

- *Type:* string

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`. Defaults to `"duration"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

##### `learningThreshold`<sup>Optional</sup> <a name="learningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold"></a>

```typescript
public readonly learningThreshold: number;
```

- *Type:* number

A number of occurrences after which signals are generated for values that weren't learned.

Valid values are `0`, `1`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptions <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleOptionsThirdPartyRuleOptions: securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus">defaultStatus</a></code> | <code>string</code> | Severity of the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery">rootQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]</code> | root_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications">defaultNotifications</a></code> | <code>string[]</code> | Notification targets for the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate">signalTitleTemplate</a></code> | <code>string</code> | A template for the signal title; if omitted, the title is generated based on the case name. |

---

##### `defaultStatus`<sup>Required</sup> <a name="defaultStatus" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus"></a>

```typescript
public readonly defaultStatus: string;
```

- *Type:* string

Severity of the default rule case, when none of the third-party cases match.

Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}

---

##### `rootQuery`<sup>Required</sup> <a name="rootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery"></a>

```typescript
public readonly rootQuery: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]

root_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}

---

##### `defaultNotifications`<sup>Optional</sup> <a name="defaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications"></a>

```typescript
public readonly defaultNotifications: string[];
```

- *Type:* string[]

Notification targets for the default rule case, when none of the third-party cases match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}

---

##### `signalTitleTemplate`<sup>Optional</sup> <a name="signalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate"></a>

```typescript
public readonly signalTitleTemplate: string;
```

- *Type:* string

A template for the signal title; if omitted, the title is generated based on the case name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery: securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query">query</a></code> | <code>string</code> | Query to filter logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | Fields to group by. If empty, each log triggers a signal. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query to filter logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

Fields to group by. If empty, each log triggers a signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

### SecurityMonitoringRuleQuery <a name="SecurityMonitoringRuleQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleQuery: securityMonitoringRule.SecurityMonitoringRuleQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query">query</a></code> | <code>string</code> | Query to run on logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule">agentRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]</code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation">aggregation</a></code> | <code>string</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource">dataSource</a></code> | <code>string</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields">distinctFields</a></code> | <code>string[]</code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields">hasOptionalGroupByFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes">indexes</a></code> | <code>string[]</code> | List of indexes to run the query on when the data source is `logs`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric">metric</a></code> | <code>string</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics">metrics</a></code> | <code>string[]</code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name">name</a></code> | <code>string</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `agentRule`<sup>Optional</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule"></a>

```typescript
public readonly agentRule: IResolvable | SecurityMonitoringRuleQueryAgentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#data_source SecurityMonitoringRule#data_source}

---

##### `distinctFields`<sup>Optional</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields"></a>

```typescript
public readonly distinctFields: string[];
```

- *Type:* string[]

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

##### `hasOptionalGroupByFields`<sup>Optional</sup> <a name="hasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields"></a>

```typescript
public readonly hasOptionalGroupByFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_optional_group_by_fields SecurityMonitoringRule#has_optional_group_by_fields}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes"></a>

```typescript
public readonly indexes: string[];
```

- *Type:* string[]

List of indexes to run the query on when the data source is `logs`.

Supports only one element. Used only for scheduled rules (in other words, when `scheduling_options` is defined).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#indexes SecurityMonitoringRule#indexes}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleQueryAgentRule <a name="SecurityMonitoringRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleQueryAgentRule: securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId">agentRuleId</a></code> | <code>string</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression">expression</a></code> | <code>string</code> | **Deprecated**. It won't be applied anymore. |

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId"></a>

```typescript
public readonly agentRuleId: string;
```

- *Type:* string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

### SecurityMonitoringRuleReferenceTables <a name="SecurityMonitoringRuleReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleReferenceTables: securityMonitoringRule.SecurityMonitoringRuleReferenceTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence">checkPresence</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to include or exclude logs that match the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName">columnName</a></code> | <code>string</code> | The name of the column in the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath">logFieldPath</a></code> | <code>string</code> | The field in the log that should be matched against the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName">ruleQueryName</a></code> | <code>string</code> | The name of the query to filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName">tableName</a></code> | <code>string</code> | The name of the reference table. |

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence"></a>

```typescript
public readonly checkPresence: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to include or exclude logs that match the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

The name of the column in the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}

---

##### `logFieldPath`<sup>Required</sup> <a name="logFieldPath" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath"></a>

```typescript
public readonly logFieldPath: string;
```

- *Type:* string

The field in the log that should be matched against the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}

---

##### `ruleQueryName`<sup>Required</sup> <a name="ruleQueryName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName"></a>

```typescript
public readonly ruleQueryName: string;
```

- *Type:* string

The name of the query to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}

---

### SecurityMonitoringRuleSchedulingOptions <a name="SecurityMonitoringRuleSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleSchedulingOptions: securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule">rrule</a></code> | <code>string</code> | Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start">start</a></code> | <code>string</code> | Start date for the schedule, in ISO 8601 format without timezone. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone">timezone</a></code> | <code>string</code> | Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Start date for the schedule, in ISO 8601 format without timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}

---

### SecurityMonitoringRuleSignalQuery <a name="SecurityMonitoringRuleSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleSignalQuery: securityMonitoringRule.SecurityMonitoringRuleSignalQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId">ruleId</a></code> | <code>string</code> | Rule ID of the signal to correlate. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation">aggregation</a></code> | <code>string</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields">correlatedByFields</a></code> | <code>string[]</code> | Fields to correlate by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex">correlatedQueryIndex</a></code> | <code>string</code> | Index of the rule query used to retrieve the correlated field. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId">defaultRuleId</a></code> | <code>string</code> | Default Rule ID of the signal to correlate. This value is READ-ONLY. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name">name</a></code> | <code>string</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Rule ID of the signal to correlate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `correlatedByFields`<sup>Optional</sup> <a name="correlatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields"></a>

```typescript
public readonly correlatedByFields: string[];
```

- *Type:* string[]

Fields to correlate by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}

---

##### `correlatedQueryIndex`<sup>Optional</sup> <a name="correlatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex"></a>

```typescript
public readonly correlatedQueryIndex: string;
```

- *Type:* string

Index of the rule query used to retrieve the correlated field.

An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}

---

##### `defaultRuleId`<sup>Optional</sup> <a name="defaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId"></a>

```typescript
public readonly defaultRuleId: string;
```

- *Type:* string

Default Rule ID of the signal to correlate. This value is READ-ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_rule_id SecurityMonitoringRule#default_rule_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleThirdPartyCase <a name="SecurityMonitoringRuleThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

const securityMonitoringRuleThirdPartyCase: securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status">status</a></code> | <code>string</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name">name</a></code> | <code>string</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications">notifications</a></code> | <code>string[]</code> | Notification targets for each rule case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query">query</a></code> | <code>string</code> | A query to associate a third-party event to this case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

A query to associate a third-party event to this case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringRuleCalculatedFieldList <a name="SecurityMonitoringRuleCalculatedFieldList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleCalculatedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCalculatedField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>[]

---


### SecurityMonitoringRuleCalculatedFieldOutputReference <a name="SecurityMonitoringRuleCalculatedFieldOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCalculatedField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>

---


### SecurityMonitoringRuleCaseActionList <a name="SecurityMonitoringRuleCaseActionList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCaseActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleCaseActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCaseAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]

---


### SecurityMonitoringRuleCaseActionOptionsOutputReference <a name="SecurityMonitoringRuleCaseActionOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleCaseActionOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---


### SecurityMonitoringRuleCaseActionOutputReference <a name="SecurityMonitoringRuleCaseActionOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions"></a>

```typescript
public putOptions(value: SecurityMonitoringRuleCaseActionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options"></a>

```typescript
public readonly options: SecurityMonitoringRuleCaseActionOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: SecurityMonitoringRuleCaseActionOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCaseAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>

---


### SecurityMonitoringRuleCaseList <a name="SecurityMonitoringRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>[]

---


### SecurityMonitoringRuleCaseOutputReference <a name="SecurityMonitoringRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications">resetNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction"></a>

```typescript
public putAction(value: IResolvable | SecurityMonitoringRuleCaseAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications"></a>

```typescript
public resetNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput">notificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action"></a>

```typescript
public readonly action: SecurityMonitoringRuleCaseActionList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | SecurityMonitoringRuleCaseAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleCase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>

---


### SecurityMonitoringRuleFilterList <a name="SecurityMonitoringRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>[]

---


### SecurityMonitoringRuleFilterOutputReference <a name="SecurityMonitoringRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations">resetBaselineUserLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineUserLocations` <a name="resetBaselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations"></a>

```typescript
public resetBaselineUserLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput">baselineUserLocationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">baselineUserLocations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baselineUserLocationsInput`<sup>Optional</sup> <a name="baselineUserLocationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput"></a>

```typescript
public readonly baselineUserLocationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baselineUserLocations`<sup>Required</sup> <a name="baselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```typescript
public readonly baselineUserLocations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleOptionsImpossibleTravelOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---


### SecurityMonitoringRuleOptionsNewValueOptionsOutputReference <a name="SecurityMonitoringRuleOptionsNewValueOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration">resetLearningDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod">resetLearningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold">resetLearningThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLearningDuration` <a name="resetLearningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration"></a>

```typescript
public resetLearningDuration(): void
```

##### `resetLearningMethod` <a name="resetLearningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod"></a>

```typescript
public resetLearningMethod(): void
```

##### `resetLearningThreshold` <a name="resetLearningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold"></a>

```typescript
public resetLearningThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput">forgetAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput">learningDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput">learningMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput">learningThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter">forgetAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration">learningDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod">learningMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold">learningThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forgetAfterInput`<sup>Optional</sup> <a name="forgetAfterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput"></a>

```typescript
public readonly forgetAfterInput: number;
```

- *Type:* number

---

##### `learningDurationInput`<sup>Optional</sup> <a name="learningDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput"></a>

```typescript
public readonly learningDurationInput: number;
```

- *Type:* number

---

##### `learningMethodInput`<sup>Optional</sup> <a name="learningMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput"></a>

```typescript
public readonly learningMethodInput: string;
```

- *Type:* string

---

##### `learningThresholdInput`<sup>Optional</sup> <a name="learningThresholdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput"></a>

```typescript
public readonly learningThresholdInput: number;
```

- *Type:* number

---

##### `forgetAfter`<sup>Required</sup> <a name="forgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```typescript
public readonly forgetAfter: number;
```

- *Type:* number

---

##### `learningDuration`<sup>Required</sup> <a name="learningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```typescript
public readonly learningDuration: number;
```

- *Type:* number

---

##### `learningMethod`<sup>Required</sup> <a name="learningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```typescript
public readonly learningMethod: string;
```

- *Type:* string

---

##### `learningThreshold`<sup>Required</sup> <a name="learningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```typescript
public readonly learningThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleOptionsNewValueOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---


### SecurityMonitoringRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions">putImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions">putNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions">putThirdPartyRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">resetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod">resetDetectionMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions">resetImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive">resetKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration">resetMaxSignalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions">resetNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions">resetThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImpossibleTravelOptions` <a name="putImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions"></a>

```typescript
public putImpossibleTravelOptions(value: SecurityMonitoringRuleOptionsImpossibleTravelOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `putNewValueOptions` <a name="putNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions"></a>

```typescript
public putNewValueOptions(value: SecurityMonitoringRuleOptionsNewValueOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `putThirdPartyRuleOptions` <a name="putThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions"></a>

```typescript
public putThirdPartyRuleOptions(value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---

##### `resetDecreaseCriticalityBasedOnEnv` <a name="resetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```typescript
public resetDecreaseCriticalityBasedOnEnv(): void
```

##### `resetDetectionMethod` <a name="resetDetectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod"></a>

```typescript
public resetDetectionMethod(): void
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow"></a>

```typescript
public resetEvaluationWindow(): void
```

##### `resetImpossibleTravelOptions` <a name="resetImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions"></a>

```typescript
public resetImpossibleTravelOptions(): void
```

##### `resetKeepAlive` <a name="resetKeepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive"></a>

```typescript
public resetKeepAlive(): void
```

##### `resetMaxSignalDuration` <a name="resetMaxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration"></a>

```typescript
public resetMaxSignalDuration(): void
```

##### `resetNewValueOptions` <a name="resetNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions"></a>

```typescript
public resetNewValueOptions(): void
```

##### `resetThirdPartyRuleOptions` <a name="resetThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions"></a>

```typescript
public resetThirdPartyRuleOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions">impossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions">newValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions">thirdPartyRuleOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decreaseCriticalityBasedOnEnvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput">detectionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput">impossibleTravelOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput">keepAliveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput">maxSignalDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput">newValueOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput">thirdPartyRuleOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod">detectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow">evaluationWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive">keepAlive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration">maxSignalDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impossibleTravelOptions`<sup>Required</sup> <a name="impossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions"></a>

```typescript
public readonly impossibleTravelOptions: SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a>

---

##### `newValueOptions`<sup>Required</sup> <a name="newValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions"></a>

```typescript
public readonly newValueOptions: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a>

---

##### `thirdPartyRuleOptions`<sup>Required</sup> <a name="thirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions"></a>

```typescript
public readonly thirdPartyRuleOptions: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a>

---

##### `decreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detectionMethodInput`<sup>Optional</sup> <a name="detectionMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput"></a>

```typescript
public readonly detectionMethodInput: string;
```

- *Type:* string

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput"></a>

```typescript
public readonly evaluationWindowInput: number;
```

- *Type:* number

---

##### `impossibleTravelOptionsInput`<sup>Optional</sup> <a name="impossibleTravelOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput"></a>

```typescript
public readonly impossibleTravelOptionsInput: SecurityMonitoringRuleOptionsImpossibleTravelOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `keepAliveInput`<sup>Optional</sup> <a name="keepAliveInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput"></a>

```typescript
public readonly keepAliveInput: number;
```

- *Type:* number

---

##### `maxSignalDurationInput`<sup>Optional</sup> <a name="maxSignalDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput"></a>

```typescript
public readonly maxSignalDurationInput: number;
```

- *Type:* number

---

##### `newValueOptionsInput`<sup>Optional</sup> <a name="newValueOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput"></a>

```typescript
public readonly newValueOptionsInput: SecurityMonitoringRuleOptionsNewValueOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `thirdPartyRuleOptionsInput`<sup>Optional</sup> <a name="thirdPartyRuleOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput"></a>

```typescript
public readonly thirdPartyRuleOptionsInput: SecurityMonitoringRuleOptionsThirdPartyRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---

##### `decreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```typescript
public readonly decreaseCriticalityBasedOnEnv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detectionMethod`<sup>Required</sup> <a name="detectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod"></a>

```typescript
public readonly detectionMethod: string;
```

- *Type:* string

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: number;
```

- *Type:* number

---

##### `keepAlive`<sup>Required</sup> <a name="keepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive"></a>

```typescript
public readonly keepAlive: number;
```

- *Type:* number

---

##### `maxSignalDuration`<sup>Required</sup> <a name="maxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration"></a>

```typescript
public readonly maxSignalDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery">putRootQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications">resetDefaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate">resetSignalTitleTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRootQuery` <a name="putRootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery"></a>

```typescript
public putRootQuery(value: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]

---

##### `resetDefaultNotifications` <a name="resetDefaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications"></a>

```typescript
public resetDefaultNotifications(): void
```

##### `resetSignalTitleTemplate` <a name="resetSignalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate"></a>

```typescript
public resetSignalTitleTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery">rootQuery</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput">defaultNotificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput">defaultStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput">rootQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput">signalTitleTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications">defaultNotifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus">defaultStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate">signalTitleTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rootQuery`<sup>Required</sup> <a name="rootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery"></a>

```typescript
public readonly rootQuery: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a>

---

##### `defaultNotificationsInput`<sup>Optional</sup> <a name="defaultNotificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput"></a>

```typescript
public readonly defaultNotificationsInput: string[];
```

- *Type:* string[]

---

##### `defaultStatusInput`<sup>Optional</sup> <a name="defaultStatusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput"></a>

```typescript
public readonly defaultStatusInput: string;
```

- *Type:* string

---

##### `rootQueryInput`<sup>Optional</sup> <a name="rootQueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput"></a>

```typescript
public readonly rootQueryInput: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]

---

##### `signalTitleTemplateInput`<sup>Optional</sup> <a name="signalTitleTemplateInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput"></a>

```typescript
public readonly signalTitleTemplateInput: string;
```

- *Type:* string

---

##### `defaultNotifications`<sup>Required</sup> <a name="defaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications"></a>

```typescript
public readonly defaultNotifications: string[];
```

- *Type:* string[]

---

##### `defaultStatus`<sup>Required</sup> <a name="defaultStatus" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus"></a>

```typescript
public readonly defaultStatus: string;
```

- *Type:* string

---

##### `signalTitleTemplate`<sup>Required</sup> <a name="signalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate"></a>

```typescript
public readonly signalTitleTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleOptionsThirdPartyRuleOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>[]

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields"></a>

```typescript
public resetGroupByFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput"></a>

```typescript
public readonly groupByFieldsInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>

---


### SecurityMonitoringRuleQueryAgentRuleList <a name="SecurityMonitoringRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleQueryAgentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleQueryAgentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]

---


### SecurityMonitoringRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">agentRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId">agentRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentRuleIdInput`<sup>Optional</sup> <a name="agentRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```typescript
public readonly agentRuleIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```typescript
public readonly agentRuleId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleQueryAgentRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>

---


### SecurityMonitoringRuleQueryList <a name="SecurityMonitoringRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>[]

---


### SecurityMonitoringRuleQueryOutputReference <a name="SecurityMonitoringRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule">putAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule">resetAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields">resetDistinctFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields">resetHasOptionalGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes">resetIndexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentRule` <a name="putAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule"></a>

```typescript
public putAgentRule(value: IResolvable | SecurityMonitoringRuleQueryAgentRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]

---

##### `resetAgentRule` <a name="resetAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule"></a>

```typescript
public resetAgentRule(): void
```

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetDistinctFields` <a name="resetDistinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields"></a>

```typescript
public resetDistinctFields(): void
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields"></a>

```typescript
public resetGroupByFields(): void
```

##### `resetHasOptionalGroupByFields` <a name="resetHasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```typescript
public resetHasOptionalGroupByFields(): void
```

##### `resetIndexes` <a name="resetIndexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes"></a>

```typescript
public resetIndexes(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule">agentRule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput">agentRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput">distinctFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">hasOptionalGroupByFieldsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput">indexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput">metricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields">distinctFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields">groupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields">hasOptionalGroupByFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes">indexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentRule`<sup>Required</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule"></a>

```typescript
public readonly agentRule: SecurityMonitoringRuleQueryAgentRuleList;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a>

---

##### `agentRuleInput`<sup>Optional</sup> <a name="agentRuleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput"></a>

```typescript
public readonly agentRuleInput: IResolvable | SecurityMonitoringRuleQueryAgentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>[]

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `distinctFieldsInput`<sup>Optional</sup> <a name="distinctFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput"></a>

```typescript
public readonly distinctFieldsInput: string[];
```

- *Type:* string[]

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput"></a>

```typescript
public readonly groupByFieldsInput: string[];
```

- *Type:* string[]

---

##### `hasOptionalGroupByFieldsInput`<sup>Optional</sup> <a name="hasOptionalGroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```typescript
public readonly hasOptionalGroupByFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `indexesInput`<sup>Optional</sup> <a name="indexesInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput"></a>

```typescript
public readonly indexesInput: string[];
```

- *Type:* string[]

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput"></a>

```typescript
public readonly metricsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `distinctFields`<sup>Required</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields"></a>

```typescript
public readonly distinctFields: string[];
```

- *Type:* string[]

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields"></a>

```typescript
public readonly groupByFields: string[];
```

- *Type:* string[]

---

##### `hasOptionalGroupByFields`<sup>Required</sup> <a name="hasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```typescript
public readonly hasOptionalGroupByFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes"></a>

```typescript
public readonly indexes: string[];
```

- *Type:* string[]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>

---


### SecurityMonitoringRuleReferenceTablesList <a name="SecurityMonitoringRuleReferenceTablesList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleReferenceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleReferenceTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>[]

---


### SecurityMonitoringRuleReferenceTablesOutputReference <a name="SecurityMonitoringRuleReferenceTablesOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput">logFieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput">ruleQueryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence">checkPresence</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath">logFieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName">ruleQueryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput"></a>

```typescript
public readonly checkPresenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `logFieldPathInput`<sup>Optional</sup> <a name="logFieldPathInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput"></a>

```typescript
public readonly logFieldPathInput: string;
```

- *Type:* string

---

##### `ruleQueryNameInput`<sup>Optional</sup> <a name="ruleQueryNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput"></a>

```typescript
public readonly ruleQueryNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `logFieldPath`<sup>Required</sup> <a name="logFieldPath" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath"></a>

```typescript
public readonly logFieldPath: string;
```

- *Type:* string

---

##### `ruleQueryName`<sup>Required</sup> <a name="ruleQueryName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName"></a>

```typescript
public readonly ruleQueryName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleReferenceTables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>

---


### SecurityMonitoringRuleSchedulingOptionsOutputReference <a name="SecurityMonitoringRuleSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput">rruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput"></a>

```typescript
public readonly rruleInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecurityMonitoringRuleSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---


### SecurityMonitoringRuleSignalQueryList <a name="SecurityMonitoringRuleSignalQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleSignalQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleSignalQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleSignalQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>[]

---


### SecurityMonitoringRuleSignalQueryOutputReference <a name="SecurityMonitoringRuleSignalQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields">resetCorrelatedByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex">resetCorrelatedQueryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId">resetDefaultRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetCorrelatedByFields` <a name="resetCorrelatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields"></a>

```typescript
public resetCorrelatedByFields(): void
```

##### `resetCorrelatedQueryIndex` <a name="resetCorrelatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex"></a>

```typescript
public resetCorrelatedQueryIndex(): void
```

##### `resetDefaultRuleId` <a name="resetDefaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId"></a>

```typescript
public resetDefaultRuleId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput">correlatedByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput">correlatedQueryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput">defaultRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields">correlatedByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex">correlatedQueryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId">defaultRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `correlatedByFieldsInput`<sup>Optional</sup> <a name="correlatedByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput"></a>

```typescript
public readonly correlatedByFieldsInput: string[];
```

- *Type:* string[]

---

##### `correlatedQueryIndexInput`<sup>Optional</sup> <a name="correlatedQueryIndexInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput"></a>

```typescript
public readonly correlatedQueryIndexInput: string;
```

- *Type:* string

---

##### `defaultRuleIdInput`<sup>Optional</sup> <a name="defaultRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput"></a>

```typescript
public readonly defaultRuleIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `correlatedByFields`<sup>Required</sup> <a name="correlatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields"></a>

```typescript
public readonly correlatedByFields: string[];
```

- *Type:* string[]

---

##### `correlatedQueryIndex`<sup>Required</sup> <a name="correlatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```typescript
public readonly correlatedQueryIndex: string;
```

- *Type:* string

---

##### `defaultRuleId`<sup>Required</sup> <a name="defaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId"></a>

```typescript
public readonly defaultRuleId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleSignalQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>

---


### SecurityMonitoringRuleThirdPartyCaseList <a name="SecurityMonitoringRuleThirdPartyCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get"></a>

```typescript
public get(index: number): SecurityMonitoringRuleThirdPartyCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleThirdPartyCase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>[]

---


### SecurityMonitoringRuleThirdPartyCaseOutputReference <a name="SecurityMonitoringRuleThirdPartyCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer"></a>

```typescript
import { securityMonitoringRule } from '@cdktf/provider-datadog'

new securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput">notificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: string[];
```

- *Type:* string[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityMonitoringRuleThirdPartyCase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>

---



