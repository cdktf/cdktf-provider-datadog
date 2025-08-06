# `monitor` Submodule <a name="`monitor` Submodule" id="@cdktf/provider-datadog.monitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Monitor <a name="Monitor" id="@cdktf/provider-datadog.monitor.Monitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.Monitor.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.Monitor(scope: Construct, id: string, config: MonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig">MonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorConfig">MonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds">putMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows">putMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions">putSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample">resetEnableLogsSample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEnableSamples">resetEnableSamples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage">resetEscalationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay">resetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor">resetGroupbySimpleMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration">resetGroupRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags">resetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds">resetMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows">resetMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay">resetNewGroupDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay">resetNewHostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe">resetNoDataTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName">resetNotificationPresetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit">resetNotifyAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy">resetNotifyBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData">resetNotifyNoData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData">resetOnMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval">resetRenotifyInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences">resetRenotifyOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses">resetRenotifyStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow">resetRequireFullWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles">resetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions">resetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH">resetTimeoutH</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.Monitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.monitor.Monitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.monitor.Monitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.monitor.Monitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.monitor.Monitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.monitor.Monitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.monitor.Monitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.monitor.Monitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.monitor.Monitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitorThresholds` <a name="putMonitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds"></a>

```typescript
public putMonitorThresholds(value: MonitorMonitorThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `putMonitorThresholdWindows` <a name="putMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows"></a>

```typescript
public putMonitorThresholdWindows(value: MonitorMonitorThresholdWindows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `putSchedulingOptions` <a name="putSchedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions"></a>

```typescript
public putSchedulingOptions(value: MonitorSchedulingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `putVariables` <a name="putVariables" id="@cdktf/provider-datadog.monitor.Monitor.putVariables"></a>

```typescript
public putVariables(value: MonitorVariables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.putVariables.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `resetEnableLogsSample` <a name="resetEnableLogsSample" id="@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample"></a>

```typescript
public resetEnableLogsSample(): void
```

##### `resetEnableSamples` <a name="resetEnableSamples" id="@cdktf/provider-datadog.monitor.Monitor.resetEnableSamples"></a>

```typescript
public resetEnableSamples(): void
```

##### `resetEscalationMessage` <a name="resetEscalationMessage" id="@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage"></a>

```typescript
public resetEscalationMessage(): void
```

##### `resetEvaluationDelay` <a name="resetEvaluationDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay"></a>

```typescript
public resetEvaluationDelay(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-datadog.monitor.Monitor.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetGroupbySimpleMonitor` <a name="resetGroupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor"></a>

```typescript
public resetGroupbySimpleMonitor(): void
```

##### `resetGroupRetentionDuration` <a name="resetGroupRetentionDuration" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration"></a>

```typescript
public resetGroupRetentionDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.monitor.Monitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeTags` <a name="resetIncludeTags" id="@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags"></a>

```typescript
public resetIncludeTags(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-datadog.monitor.Monitor.resetLocked"></a>

```typescript
public resetLocked(): void
```

##### `resetMonitorThresholds` <a name="resetMonitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds"></a>

```typescript
public resetMonitorThresholds(): void
```

##### `resetMonitorThresholdWindows` <a name="resetMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows"></a>

```typescript
public resetMonitorThresholdWindows(): void
```

##### `resetNewGroupDelay` <a name="resetNewGroupDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay"></a>

```typescript
public resetNewGroupDelay(): void
```

##### `resetNewHostDelay` <a name="resetNewHostDelay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay"></a>

```typescript
public resetNewHostDelay(): void
```

##### `resetNoDataTimeframe` <a name="resetNoDataTimeframe" id="@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe"></a>

```typescript
public resetNoDataTimeframe(): void
```

##### `resetNotificationPresetName` <a name="resetNotificationPresetName" id="@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName"></a>

```typescript
public resetNotificationPresetName(): void
```

##### `resetNotifyAudit` <a name="resetNotifyAudit" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit"></a>

```typescript
public resetNotifyAudit(): void
```

##### `resetNotifyBy` <a name="resetNotifyBy" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy"></a>

```typescript
public resetNotifyBy(): void
```

##### `resetNotifyNoData` <a name="resetNotifyNoData" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData"></a>

```typescript
public resetNotifyNoData(): void
```

##### `resetOnMissingData` <a name="resetOnMissingData" id="@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData"></a>

```typescript
public resetOnMissingData(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-datadog.monitor.Monitor.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRenotifyInterval` <a name="resetRenotifyInterval" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval"></a>

```typescript
public resetRenotifyInterval(): void
```

##### `resetRenotifyOccurrences` <a name="resetRenotifyOccurrences" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences"></a>

```typescript
public resetRenotifyOccurrences(): void
```

##### `resetRenotifyStatuses` <a name="resetRenotifyStatuses" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses"></a>

```typescript
public resetRenotifyStatuses(): void
```

##### `resetRequireFullWindow` <a name="resetRequireFullWindow" id="@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow"></a>

```typescript
public resetRequireFullWindow(): void
```

##### `resetRestrictedRoles` <a name="resetRestrictedRoles" id="@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles"></a>

```typescript
public resetRestrictedRoles(): void
```

##### `resetSchedulingOptions` <a name="resetSchedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions"></a>

```typescript
public resetSchedulingOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.monitor.Monitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutH` <a name="resetTimeoutH" id="@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH"></a>

```typescript
public resetTimeoutH(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.monitor.Monitor.resetValidate"></a>

```typescript
public resetValidate(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-datadog.monitor.Monitor.resetVariables"></a>

```typescript
public resetVariables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

monitor.Monitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

monitor.Monitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

monitor.Monitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

monitor.Monitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Monitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Monitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Monitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput">enableLogsSampleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableSamplesInput">enableSamplesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput">escalationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput">evaluationDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput">groupbySimpleMonitorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput">groupRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput">includeTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput">monitorThresholdsInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput">monitorThresholdWindowsInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput">newGroupDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput">newHostDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput">noDataTimeframeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput">notificationPresetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput">notifyAuditInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput">notifyByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput">notifyNoDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput">onMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput">renotifyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput">renotifyOccurrencesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput">renotifyStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput">requireFullWindowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput">restrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput">schedulingOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput">timeoutHInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validateInput">validateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variablesInput">variablesInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample">enableLogsSample</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableSamples">enableSamples</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage">escalationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay">evaluationDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration">groupRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTags">includeTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay">newGroupDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay">newHostDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe">noDataTimeframe</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName">notificationPresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit">notifyAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyBy">notifyBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData">notifyNoData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingData">onMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval">renotifyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses">renotifyStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow">requireFullWindow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutH">timeoutH</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.monitor.Monitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.Monitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitor.Monitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitor.Monitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.monitor.Monitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.monitor.Monitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitor.Monitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitor.Monitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorThresholds`<sup>Required</sup> <a name="monitorThresholds" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds"></a>

```typescript
public readonly monitorThresholds: MonitorMonitorThresholdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a>

---

##### `monitorThresholdWindows`<sup>Required</sup> <a name="monitorThresholdWindows" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows"></a>

```typescript
public readonly monitorThresholdWindows: MonitorMonitorThresholdWindowsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a>

---

##### `schedulingOptions`<sup>Required</sup> <a name="schedulingOptions" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions"></a>

```typescript
public readonly schedulingOptions: MonitorSchedulingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-datadog.monitor.Monitor.property.variables"></a>

```typescript
public readonly variables: MonitorVariablesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a>

---

##### `enableLogsSampleInput`<sup>Optional</sup> <a name="enableLogsSampleInput" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput"></a>

```typescript
public readonly enableLogsSampleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSamplesInput`<sup>Optional</sup> <a name="enableSamplesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.enableSamplesInput"></a>

```typescript
public readonly enableSamplesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `escalationMessageInput`<sup>Optional</sup> <a name="escalationMessageInput" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput"></a>

```typescript
public readonly escalationMessageInput: string;
```

- *Type:* string

---

##### `evaluationDelayInput`<sup>Optional</sup> <a name="evaluationDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput"></a>

```typescript
public readonly evaluationDelayInput: number;
```

- *Type:* number

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupbySimpleMonitorInput`<sup>Optional</sup> <a name="groupbySimpleMonitorInput" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput"></a>

```typescript
public readonly groupbySimpleMonitorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupRetentionDurationInput`<sup>Optional</sup> <a name="groupRetentionDurationInput" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput"></a>

```typescript
public readonly groupRetentionDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.monitor.Monitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeTagsInput`<sup>Optional</sup> <a name="includeTagsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput"></a>

```typescript
public readonly includeTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-datadog.monitor.Monitor.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.monitor.Monitor.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `monitorThresholdsInput`<sup>Optional</sup> <a name="monitorThresholdsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput"></a>

```typescript
public readonly monitorThresholdsInput: MonitorMonitorThresholds;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `monitorThresholdWindowsInput`<sup>Optional</sup> <a name="monitorThresholdWindowsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput"></a>

```typescript
public readonly monitorThresholdWindowsInput: MonitorMonitorThresholdWindows;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.monitor.Monitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `newGroupDelayInput`<sup>Optional</sup> <a name="newGroupDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput"></a>

```typescript
public readonly newGroupDelayInput: number;
```

- *Type:* number

---

##### `newHostDelayInput`<sup>Optional</sup> <a name="newHostDelayInput" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput"></a>

```typescript
public readonly newHostDelayInput: number;
```

- *Type:* number

---

##### `noDataTimeframeInput`<sup>Optional</sup> <a name="noDataTimeframeInput" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput"></a>

```typescript
public readonly noDataTimeframeInput: number;
```

- *Type:* number

---

##### `notificationPresetNameInput`<sup>Optional</sup> <a name="notificationPresetNameInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput"></a>

```typescript
public readonly notificationPresetNameInput: string;
```

- *Type:* string

---

##### `notifyAuditInput`<sup>Optional</sup> <a name="notifyAuditInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput"></a>

```typescript
public readonly notifyAuditInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyByInput`<sup>Optional</sup> <a name="notifyByInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput"></a>

```typescript
public readonly notifyByInput: string[];
```

- *Type:* string[]

---

##### `notifyNoDataInput`<sup>Optional</sup> <a name="notifyNoDataInput" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput"></a>

```typescript
public readonly notifyNoDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onMissingDataInput`<sup>Optional</sup> <a name="onMissingDataInput" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput"></a>

```typescript
public readonly onMissingDataInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-datadog.monitor.Monitor.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.monitor.Monitor.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `renotifyIntervalInput`<sup>Optional</sup> <a name="renotifyIntervalInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput"></a>

```typescript
public readonly renotifyIntervalInput: number;
```

- *Type:* number

---

##### `renotifyOccurrencesInput`<sup>Optional</sup> <a name="renotifyOccurrencesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput"></a>

```typescript
public readonly renotifyOccurrencesInput: number;
```

- *Type:* number

---

##### `renotifyStatusesInput`<sup>Optional</sup> <a name="renotifyStatusesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput"></a>

```typescript
public readonly renotifyStatusesInput: string[];
```

- *Type:* string[]

---

##### `requireFullWindowInput`<sup>Optional</sup> <a name="requireFullWindowInput" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput"></a>

```typescript
public readonly requireFullWindowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedRolesInput`<sup>Optional</sup> <a name="restrictedRolesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput"></a>

```typescript
public readonly restrictedRolesInput: string[];
```

- *Type:* string[]

---

##### `schedulingOptionsInput`<sup>Optional</sup> <a name="schedulingOptionsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput"></a>

```typescript
public readonly schedulingOptionsInput: MonitorSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.monitor.Monitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutHInput`<sup>Optional</sup> <a name="timeoutHInput" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput"></a>

```typescript
public readonly timeoutHInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.monitor.Monitor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.monitor.Monitor.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-datadog.monitor.Monitor.property.variablesInput"></a>

```typescript
public readonly variablesInput: MonitorVariables;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `enableLogsSample`<sup>Required</sup> <a name="enableLogsSample" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample"></a>

```typescript
public readonly enableLogsSample: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSamples`<sup>Required</sup> <a name="enableSamples" id="@cdktf/provider-datadog.monitor.Monitor.property.enableSamples"></a>

```typescript
public readonly enableSamples: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `escalationMessage`<sup>Required</sup> <a name="escalationMessage" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage"></a>

```typescript
public readonly escalationMessage: string;
```

- *Type:* string

---

##### `evaluationDelay`<sup>Required</sup> <a name="evaluationDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay"></a>

```typescript
public readonly evaluationDelay: number;
```

- *Type:* number

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupbySimpleMonitor`<sup>Required</sup> <a name="groupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor"></a>

```typescript
public readonly groupbySimpleMonitor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupRetentionDuration`<sup>Required</sup> <a name="groupRetentionDuration" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration"></a>

```typescript
public readonly groupRetentionDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTags"></a>

```typescript
public readonly includeTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-datadog.monitor.Monitor.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.monitor.Monitor.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.Monitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `newGroupDelay`<sup>Required</sup> <a name="newGroupDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay"></a>

```typescript
public readonly newGroupDelay: number;
```

- *Type:* number

---

##### `newHostDelay`<sup>Required</sup> <a name="newHostDelay" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay"></a>

```typescript
public readonly newHostDelay: number;
```

- *Type:* number

---

##### `noDataTimeframe`<sup>Required</sup> <a name="noDataTimeframe" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe"></a>

```typescript
public readonly noDataTimeframe: number;
```

- *Type:* number

---

##### `notificationPresetName`<sup>Required</sup> <a name="notificationPresetName" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName"></a>

```typescript
public readonly notificationPresetName: string;
```

- *Type:* string

---

##### `notifyAudit`<sup>Required</sup> <a name="notifyAudit" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit"></a>

```typescript
public readonly notifyAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyBy`<sup>Required</sup> <a name="notifyBy" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyBy"></a>

```typescript
public readonly notifyBy: string[];
```

- *Type:* string[]

---

##### `notifyNoData`<sup>Required</sup> <a name="notifyNoData" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData"></a>

```typescript
public readonly notifyNoData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onMissingData`<sup>Required</sup> <a name="onMissingData" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingData"></a>

```typescript
public readonly onMissingData: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-datadog.monitor.Monitor.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.Monitor.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: number;
```

- *Type:* number

---

##### `renotifyOccurrences`<sup>Required</sup> <a name="renotifyOccurrences" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences"></a>

```typescript
public readonly renotifyOccurrences: number;
```

- *Type:* number

---

##### `renotifyStatuses`<sup>Required</sup> <a name="renotifyStatuses" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses"></a>

```typescript
public readonly renotifyStatuses: string[];
```

- *Type:* string[]

---

##### `requireFullWindow`<sup>Required</sup> <a name="requireFullWindow" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow"></a>

```typescript
public readonly requireFullWindow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.monitor.Monitor.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `timeoutH`<sup>Required</sup> <a name="timeoutH" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutH"></a>

```typescript
public readonly timeoutH: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.monitor.Monitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.monitor.Monitor.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfig <a name="MonitorConfig" id="@cdktf/provider-datadog.monitor.MonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorConfig.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorConfig: monitor.MonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.message">message</a></code> | <code>string</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.name">name</a></code> | <code>string</code> | Name of Datadog monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.query">query</a></code> | <code>string</code> | The monitor query to notify on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.type">type</a></code> | <code>string</code> | The type of the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample">enableLogsSample</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.enableSamples">enableSamples</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not a list of samples which triggered the alert is included. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage">escalationMessage</a></code> | <code>string</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay">evaluationDelay</a></code> | <code>number</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor">groupbySimpleMonitor</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration">groupRetentionDuration</a></code> | <code>string</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags">includeTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.locked">locked</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether changes to this monitor should be restricted to the creator or admins. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds">monitorThresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows">monitorThresholdWindows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay">newGroupDelay</a></code> | <code>number</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay">newHostDelay</a></code> | <code>number</code> | **Deprecated**. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe">noDataTimeframe</a></code> | <code>number</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName">notificationPresetName</a></code> | <code>string</code> | Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit">notifyAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy">notifyBy</a></code> | <code>string[]</code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData">notifyNoData</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData">onMissingData</a></code> | <code>string</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.priority">priority</a></code> | <code>string</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval">renotifyInterval</a></code> | <code>number</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>number</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses">renotifyStatuses</a></code> | <code>string[]</code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow">requireFullWindow</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles">restrictedRoles</a></code> | <code>string[]</code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions">schedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH">timeoutH</a></code> | <code>number</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#message Monitor#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#query Monitor#query}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`, `network-performance alert`, `cost alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#type Monitor#type}

---

##### `enableLogsSample`<sup>Optional</sup> <a name="enableLogsSample" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample"></a>

```typescript
public readonly enableLogsSample: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `enableSamples`<sup>Optional</sup> <a name="enableSamples" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.enableSamples"></a>

```typescript
public readonly enableSamples: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not a list of samples which triggered the alert is included.

This is only used by CI Test and Pipeline monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#enable_samples Monitor#enable_samples}

---

##### `escalationMessage`<sup>Optional</sup> <a name="escalationMessage" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage"></a>

```typescript
public readonly escalationMessage: string;
```

- *Type:* string

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `evaluationDelay`<sup>Optional</sup> <a name="evaluationDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay"></a>

```typescript
public readonly evaluationDelay: number;
```

- *Type:* number

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `groupbySimpleMonitor`<sup>Optional</sup> <a name="groupbySimpleMonitor" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor"></a>

```typescript
public readonly groupbySimpleMonitor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `groupRetentionDuration`<sup>Optional</sup> <a name="groupRetentionDuration" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration"></a>

```typescript
public readonly groupRetentionDuration: string;
```

- *Type:* string

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags"></a>

```typescript
public readonly includeTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether changes to this monitor should be restricted to the creator or admins.

Defaults to `false`. **Deprecated.** Use `restricted_roles`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#locked Monitor#locked}

---

##### `monitorThresholds`<sup>Optional</sup> <a name="monitorThresholds" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds"></a>

```typescript
public readonly monitorThresholds: MonitorMonitorThresholds;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `monitorThresholdWindows`<sup>Optional</sup> <a name="monitorThresholdWindows" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows"></a>

```typescript
public readonly monitorThresholdWindows: MonitorMonitorThresholdWindows;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `newGroupDelay`<sup>Optional</sup> <a name="newGroupDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay"></a>

```typescript
public readonly newGroupDelay: number;
```

- *Type:* number

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `newHostDelay`<sup>Optional</sup> <a name="newHostDelay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay"></a>

```typescript
public readonly newHostDelay: number;
```

- *Type:* number

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `noDataTimeframe`<sup>Optional</sup> <a name="noDataTimeframe" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe"></a>

```typescript
public readonly noDataTimeframe: number;
```

- *Type:* number

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `notificationPresetName`<sup>Optional</sup> <a name="notificationPresetName" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName"></a>

```typescript
public readonly notificationPresetName: string;
```

- *Type:* string

Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `notifyAudit`<sup>Optional</sup> <a name="notifyAudit" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit"></a>

```typescript
public readonly notifyAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `notifyBy`<sup>Optional</sup> <a name="notifyBy" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy"></a>

```typescript
public readonly notifyBy: string[];
```

- *Type:* string[]

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `notifyNoData`<sup>Optional</sup> <a name="notifyNoData" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData"></a>

```typescript
public readonly notifyNoData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `onMissingData`<sup>Optional</sup> <a name="onMissingData" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData"></a>

```typescript
public readonly onMissingData: string;
```

- *Type:* string

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is not available for Service Check, Composite, or SLO monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#priority Monitor#priority}

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval"></a>

```typescript
public readonly renotifyInterval: number;
```

- *Type:* number

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `renotifyOccurrences`<sup>Optional</sup> <a name="renotifyOccurrences" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences"></a>

```typescript
public readonly renotifyOccurrences: number;
```

- *Type:* number

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `renotifyStatuses`<sup>Optional</sup> <a name="renotifyStatuses" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses"></a>

```typescript
public readonly renotifyStatuses: string[];
```

- *Type:* string[]

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `requireFullWindow`<sup>Optional</sup> <a name="requireFullWindow" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow"></a>

```typescript
public readonly requireFullWindow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `restrictedRoles`<sup>Optional</sup> <a name="restrictedRoles" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles"></a>

```typescript
public readonly restrictedRoles: string[];
```

- *Type:* string[]

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.
 > **Note:** When the `TERRAFORM_MONITOR_EXPLICIT_RESTRICTED_ROLES` environment variable is set to `true`, this argument is treated as `Computed`. Terraform will automatically read the current restricted roles list from the Datadog API whenever the attribute is omitted. If `restricted_roles` is explicitly set in the configuration, that value always takes precedence over whatever is discovered during the read. This opt-in behaviour lets you migrate responsibility for monitor permissions to the `datadog_restriction_policy` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `schedulingOptions`<sup>Optional</sup> <a name="schedulingOptions" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions"></a>

```typescript
public readonly schedulingOptions: MonitorSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#tags Monitor#tags}

---

##### `timeoutH`<sup>Optional</sup> <a name="timeoutH" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH"></a>

```typescript
public readonly timeoutH: number;
```

- *Type:* number

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#validate Monitor#validate}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.variables"></a>

```typescript
public readonly variables: MonitorVariables;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#variables Monitor#variables}

---

### MonitorMonitorThresholds <a name="MonitorMonitorThresholds" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorMonitorThresholds: monitor.MonitorMonitorThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical">critical</a></code> | <code>string</code> | The monitor `CRITICAL` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery">criticalRecovery</a></code> | <code>string</code> | The monitor `CRITICAL` recovery threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok">ok</a></code> | <code>string</code> | The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown">unknown</a></code> | <code>string</code> | The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning">warning</a></code> | <code>string</code> | The monitor `WARNING` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery">warningRecovery</a></code> | <code>string</code> | The monitor `WARNING` recovery threshold. Must be a number. |

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical"></a>

```typescript
public readonly critical: string;
```

- *Type:* string

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#critical Monitor#critical}

---

##### `criticalRecovery`<sup>Optional</sup> <a name="criticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery"></a>

```typescript
public readonly criticalRecovery: string;
```

- *Type:* string

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

##### `ok`<sup>Optional</sup> <a name="ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok"></a>

```typescript
public readonly ok: string;
```

- *Type:* string

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#ok Monitor#ok}

---

##### `unknown`<sup>Optional</sup> <a name="unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown"></a>

```typescript
public readonly unknown: string;
```

- *Type:* string

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#unknown Monitor#unknown}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#warning Monitor#warning}

---

##### `warningRecovery`<sup>Optional</sup> <a name="warningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery"></a>

```typescript
public readonly warningRecovery: string;
```

- *Type:* string

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

### MonitorMonitorThresholdWindows <a name="MonitorMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorMonitorThresholdWindows: monitor.MonitorMonitorThresholdWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow">recoveryWindow</a></code> | <code>string</code> | Describes how long an anomalous metric must be normal before the alert recovers. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow">triggerWindow</a></code> | <code>string</code> | Describes how long a metric must be anomalous before an alert triggers. |

---

##### `recoveryWindow`<sup>Optional</sup> <a name="recoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow"></a>

```typescript
public readonly recoveryWindow: string;
```

- *Type:* string

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

##### `triggerWindow`<sup>Optional</sup> <a name="triggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow"></a>

```typescript
public readonly triggerWindow: string;
```

- *Type:* string

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

### MonitorSchedulingOptions <a name="MonitorSchedulingOptions" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorSchedulingOptions: monitor.MonitorSchedulingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule">customSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | custom_schedule block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | evaluation_window block. |

---

##### `customSchedule`<sup>Optional</sup> <a name="customSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule"></a>

```typescript
public readonly customSchedule: MonitorSchedulingOptionsCustomSchedule;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: MonitorSchedulingOptionsEvaluationWindow;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

### MonitorSchedulingOptionsCustomSchedule <a name="MonitorSchedulingOptionsCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorSchedulingOptionsCustomSchedule: monitor.MonitorSchedulingOptionsCustomSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#recurrence Monitor#recurrence}

---

### MonitorSchedulingOptionsCustomScheduleRecurrence <a name="MonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorSchedulingOptionsCustomScheduleRecurrence: monitor.MonitorSchedulingOptionsCustomScheduleRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule">rrule</a></code> | <code>string</code> | Must be a valid `rrule`. See API docs for supported fields. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone">timezone</a></code> | <code>string</code> | 'tz database' format. Example: `America/New_York` or `UTC`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start">start</a></code> | <code>string</code> | Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#rrule Monitor#rrule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#timezone Monitor#timezone}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#start Monitor#start}

---

### MonitorSchedulingOptionsEvaluationWindow <a name="MonitorSchedulingOptionsEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorSchedulingOptionsEvaluationWindow: monitor.MonitorSchedulingOptionsEvaluationWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts">dayStarts</a></code> | <code>string</code> | The time of the day at which a one day cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts">hourStarts</a></code> | <code>number</code> | The minute of the hour at which a one hour cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts">monthStarts</a></code> | <code>number</code> | The day of the month at which a one month cumulative evaluation window starts. |

---

##### `dayStarts`<sup>Optional</sup> <a name="dayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts"></a>

```typescript
public readonly dayStarts: string;
```

- *Type:* string

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#day_starts Monitor#day_starts}

---

##### `hourStarts`<sup>Optional</sup> <a name="hourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts"></a>

```typescript
public readonly hourStarts: number;
```

- *Type:* number

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

##### `monthStarts`<sup>Optional</sup> <a name="monthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts"></a>

```typescript
public readonly monthStarts: number;
```

- *Type:* number

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#month_starts Monitor#month_starts}

---

### MonitorVariables <a name="MonitorVariables" id="@cdktf/provider-datadog.monitor.MonitorVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariables.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariables: monitor.MonitorVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery">cloudCostQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]</code> | cloud_cost_query block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery">eventQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]</code> | event_query block. |

---

##### `cloudCostQuery`<sup>Optional</sup> <a name="cloudCostQuery" id="@cdktf/provider-datadog.monitor.MonitorVariables.property.cloudCostQuery"></a>

```typescript
public readonly cloudCostQuery: IResolvable | MonitorVariablesCloudCostQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]

cloud_cost_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#cloud_cost_query Monitor#cloud_cost_query}

---

##### `eventQuery`<sup>Optional</sup> <a name="eventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery"></a>

```typescript
public readonly eventQuery: IResolvable | MonitorVariablesEventQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#event_query Monitor#event_query}

---

### MonitorVariablesCloudCostQuery <a name="MonitorVariablesCloudCostQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesCloudCostQuery: monitor.MonitorVariablesCloudCostQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name">name</a></code> | <code>string</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query">query</a></code> | <code>string</code> | The cloud cost query definition. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator">aggregator</a></code> | <code>string</code> | The aggregation methods available for cloud cost queries. |

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for cloud cost queries. Valid values are `metrics`, `cloud_cost`, `datadog_usage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The cloud cost query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#query Monitor#query}

---

##### `aggregator`<sup>Optional</sup> <a name="aggregator" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery.property.aggregator"></a>

```typescript
public readonly aggregator: string;
```

- *Type:* string

The aggregation methods available for cloud cost queries.

Valid values are `avg`, `sum`, `max`, `min`, `last`, `area`, `l2norm`, `percentile`, `stddev`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#aggregator Monitor#aggregator}

---

### MonitorVariablesEventQuery <a name="MonitorVariablesEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesEventQuery: monitor.MonitorVariablesEventQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute">compute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]</code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name">name</a></code> | <code>string</code> | The name of query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search">search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | search block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy">groupBy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes">indexes</a></code> | <code>string[]</code> | An array of index names to query in the stream. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute"></a>

```typescript
public readonly compute: IResolvable | MonitorVariablesEventQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#compute Monitor#compute}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`, `network`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#name Monitor#name}

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search"></a>

```typescript
public readonly search: MonitorVariablesEventQuerySearch;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#search Monitor#search}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy"></a>

```typescript
public readonly groupBy: IResolvable | MonitorVariablesEventQueryGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes"></a>

```typescript
public readonly indexes: string[];
```

- *Type:* string[]

An array of index names to query in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#indexes Monitor#indexes}

---

### MonitorVariablesEventQueryCompute <a name="MonitorVariablesEventQueryCompute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesEventQueryCompute: monitor.MonitorVariablesEventQueryCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation">aggregation</a></code> | <code>string</code> | The aggregation methods for event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval">interval</a></code> | <code>number</code> | A time interval in milliseconds. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric">metric</a></code> | <code>string</code> | The measurable attribute to compute. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

The aggregation methods for event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

A time interval in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#interval Monitor#interval}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The measurable attribute to compute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#metric Monitor#metric}

---

### MonitorVariablesEventQueryGroupBy <a name="MonitorVariablesEventQueryGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesEventQueryGroupBy: monitor.MonitorVariablesEventQueryGroupBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet">facet</a></code> | <code>string</code> | The event facet. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit">limit</a></code> | <code>number</code> | The number of groups to return. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | sort block. |

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet"></a>

```typescript
public readonly facet: string;
```

- *Type:* string

The event facet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#facet Monitor#facet}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

The number of groups to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#limit Monitor#limit}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort"></a>

```typescript
public readonly sort: MonitorVariablesEventQueryGroupBySort;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#sort Monitor#sort}

---

### MonitorVariablesEventQueryGroupBySort <a name="MonitorVariablesEventQueryGroupBySort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesEventQueryGroupBySort: monitor.MonitorVariablesEventQueryGroupBySort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation">aggregation</a></code> | <code>string</code> | The aggregation methods for the event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric">metric</a></code> | <code>string</code> | The metric used for sorting group by results. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order">order</a></code> | <code>string</code> | Direction of sort. Valid values are `asc`, `desc`. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#metric Monitor#metric}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#order Monitor#order}

---

### MonitorVariablesEventQuerySearch <a name="MonitorVariablesEventQuerySearch" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

const monitorVariablesEventQuerySearch: monitor.MonitorVariablesEventQuerySearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query">query</a></code> | <code>string</code> | The events search string. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/monitor#query Monitor#query}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorMonitorThresholdsOutputReference <a name="MonitorMonitorThresholdsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorMonitorThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery">resetCriticalRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk">resetOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown">resetUnknown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery">resetWarningRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical"></a>

```typescript
public resetCritical(): void
```

##### `resetCriticalRecovery` <a name="resetCriticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery"></a>

```typescript
public resetCriticalRecovery(): void
```

##### `resetOk` <a name="resetOk" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk"></a>

```typescript
public resetOk(): void
```

##### `resetUnknown` <a name="resetUnknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown"></a>

```typescript
public resetUnknown(): void
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```

##### `resetWarningRecovery` <a name="resetWarningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery"></a>

```typescript
public resetWarningRecovery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput">criticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput">criticalRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput">okInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput">unknownInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput">warningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput">warningRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical">critical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery">criticalRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok">ok</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown">unknown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery">warningRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: string;
```

- *Type:* string

---

##### `criticalRecoveryInput`<sup>Optional</sup> <a name="criticalRecoveryInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput"></a>

```typescript
public readonly criticalRecoveryInput: string;
```

- *Type:* string

---

##### `okInput`<sup>Optional</sup> <a name="okInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput"></a>

```typescript
public readonly okInput: string;
```

- *Type:* string

---

##### `unknownInput`<sup>Optional</sup> <a name="unknownInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput"></a>

```typescript
public readonly unknownInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: string;
```

- *Type:* string

---

##### `warningRecoveryInput`<sup>Optional</sup> <a name="warningRecoveryInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput"></a>

```typescript
public readonly warningRecoveryInput: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical"></a>

```typescript
public readonly critical: string;
```

- *Type:* string

---

##### `criticalRecovery`<sup>Required</sup> <a name="criticalRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```typescript
public readonly criticalRecovery: string;
```

- *Type:* string

---

##### `ok`<sup>Required</sup> <a name="ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok"></a>

```typescript
public readonly ok: string;
```

- *Type:* string

---

##### `unknown`<sup>Required</sup> <a name="unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown"></a>

```typescript
public readonly unknown: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `warningRecovery`<sup>Required</sup> <a name="warningRecovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```typescript
public readonly warningRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorMonitorThresholds;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---


### MonitorMonitorThresholdWindowsOutputReference <a name="MonitorMonitorThresholdWindowsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorMonitorThresholdWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow">resetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow">resetTriggerWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecoveryWindow` <a name="resetRecoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow"></a>

```typescript
public resetRecoveryWindow(): void
```

##### `resetTriggerWindow` <a name="resetTriggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow"></a>

```typescript
public resetTriggerWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput">recoveryWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput">triggerWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">recoveryWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">triggerWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recoveryWindowInput`<sup>Optional</sup> <a name="recoveryWindowInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput"></a>

```typescript
public readonly recoveryWindowInput: string;
```

- *Type:* string

---

##### `triggerWindowInput`<sup>Optional</sup> <a name="triggerWindowInput" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput"></a>

```typescript
public readonly triggerWindowInput: string;
```

- *Type:* string

---

##### `recoveryWindow`<sup>Required</sup> <a name="recoveryWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```typescript
public readonly recoveryWindow: string;
```

- *Type:* string

---

##### `triggerWindow`<sup>Required</sup> <a name="triggerWindow" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```typescript
public readonly triggerWindow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorMonitorThresholdWindows;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---


### MonitorSchedulingOptionsCustomScheduleOutputReference <a name="MonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorSchedulingOptionsCustomScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence"></a>

```typescript
public putRecurrence(value: MonitorSchedulingOptionsCustomScheduleRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a>

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: MonitorSchedulingOptionsCustomScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorSchedulingOptionsCustomSchedule;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---


### MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStart` <a name="resetStart" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput">rruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rruleInput`<sup>Optional</sup> <a name="rruleInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput"></a>

```typescript
public readonly rruleInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```typescript
public readonly rrule: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorSchedulingOptionsCustomScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### MonitorSchedulingOptionsEvaluationWindowOutputReference <a name="MonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts">resetDayStarts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts">resetHourStarts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts">resetMonthStarts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayStarts` <a name="resetDayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts"></a>

```typescript
public resetDayStarts(): void
```

##### `resetHourStarts` <a name="resetHourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts"></a>

```typescript
public resetHourStarts(): void
```

##### `resetMonthStarts` <a name="resetMonthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts"></a>

```typescript
public resetMonthStarts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput">dayStartsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput">hourStartsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput">monthStartsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">dayStarts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">hourStarts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">monthStarts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayStartsInput`<sup>Optional</sup> <a name="dayStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput"></a>

```typescript
public readonly dayStartsInput: string;
```

- *Type:* string

---

##### `hourStartsInput`<sup>Optional</sup> <a name="hourStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput"></a>

```typescript
public readonly hourStartsInput: number;
```

- *Type:* number

---

##### `monthStartsInput`<sup>Optional</sup> <a name="monthStartsInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput"></a>

```typescript
public readonly monthStartsInput: number;
```

- *Type:* number

---

##### `dayStarts`<sup>Required</sup> <a name="dayStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```typescript
public readonly dayStarts: string;
```

- *Type:* string

---

##### `hourStarts`<sup>Required</sup> <a name="hourStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```typescript
public readonly hourStarts: number;
```

- *Type:* number

---

##### `monthStarts`<sup>Required</sup> <a name="monthStarts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```typescript
public readonly monthStarts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorSchedulingOptionsEvaluationWindow;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---


### MonitorSchedulingOptionsOutputReference <a name="MonitorSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorSchedulingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule">putCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow">putEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule">resetCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomSchedule` <a name="putCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule"></a>

```typescript
public putCustomSchedule(value: MonitorSchedulingOptionsCustomSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `putEvaluationWindow` <a name="putEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow"></a>

```typescript
public putEvaluationWindow(value: MonitorSchedulingOptionsEvaluationWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `resetCustomSchedule` <a name="resetCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule"></a>

```typescript
public resetCustomSchedule(): void
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow"></a>

```typescript
public resetEvaluationWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule">customSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput">customScheduleInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSchedule`<sup>Required</sup> <a name="customSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```typescript
public readonly customSchedule: MonitorSchedulingOptionsCustomScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a>

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```typescript
public readonly evaluationWindow: MonitorSchedulingOptionsEvaluationWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a>

---

##### `customScheduleInput`<sup>Optional</sup> <a name="customScheduleInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput"></a>

```typescript
public readonly customScheduleInput: MonitorSchedulingOptionsCustomSchedule;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput"></a>

```typescript
public readonly evaluationWindowInput: MonitorSchedulingOptionsEvaluationWindow;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorSchedulingOptions;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---


### MonitorVariablesCloudCostQueryList <a name="MonitorVariablesCloudCostQueryList" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesCloudCostQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get"></a>

```typescript
public get(index: number): MonitorVariablesCloudCostQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesCloudCostQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]

---


### MonitorVariablesCloudCostQueryOutputReference <a name="MonitorVariablesCloudCostQueryOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesCloudCostQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resetAggregator">resetAggregator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregator` <a name="resetAggregator" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.resetAggregator"></a>

```typescript
public resetAggregator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput">aggregatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator">aggregator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorInput`<sup>Optional</sup> <a name="aggregatorInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregatorInput"></a>

```typescript
public readonly aggregatorInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.aggregator"></a>

```typescript
public readonly aggregator: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesCloudCostQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>

---


### MonitorVariablesEventQueryComputeList <a name="MonitorVariablesEventQueryComputeList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get"></a>

```typescript
public get(index: number): MonitorVariablesEventQueryComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]

---


### MonitorVariablesEventQueryComputeOutputReference <a name="MonitorVariablesEventQueryComputeOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric">resetMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQueryCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>

---


### MonitorVariablesEventQueryGroupByList <a name="MonitorVariablesEventQueryGroupByList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryGroupByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get"></a>

```typescript
public get(index: number): MonitorVariablesEventQueryGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQueryGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]

---


### MonitorVariablesEventQueryGroupByOutputReference <a name="MonitorVariablesEventQueryGroupByOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryGroupByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort">putSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort">resetSort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSort` <a name="putSort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort"></a>

```typescript
public putSort(value: MonitorVariablesEventQueryGroupBySort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort"></a>

```typescript
public resetSort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput">facetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput">sortInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet">facet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort"></a>

```typescript
public readonly sort: MonitorVariablesEventQueryGroupBySortOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a>

---

##### `facetInput`<sup>Optional</sup> <a name="facetInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput"></a>

```typescript
public readonly facetInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput"></a>

```typescript
public readonly sortInput: MonitorVariablesEventQueryGroupBySort;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet"></a>

```typescript
public readonly facet: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQueryGroupBy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>

---


### MonitorVariablesEventQueryGroupBySortOutputReference <a name="MonitorVariablesEventQueryGroupBySortOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryGroupBySortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorVariablesEventQueryGroupBySort;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---


### MonitorVariablesEventQueryList <a name="MonitorVariablesEventQueryList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get"></a>

```typescript
public get(index: number): MonitorVariablesEventQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]

---


### MonitorVariablesEventQueryOutputReference <a name="MonitorVariablesEventQueryOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy">putGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes">resetIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompute` <a name="putCompute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute"></a>

```typescript
public putCompute(value: IResolvable | MonitorVariablesEventQueryCompute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]

---

##### `putGroupBy` <a name="putGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy"></a>

```typescript
public putGroupBy(value: IResolvable | MonitorVariablesEventQueryGroupBy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch"></a>

```typescript
public putSearch(value: MonitorVariablesEventQuerySearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetIndexes` <a name="resetIndexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes"></a>

```typescript
public resetIndexes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy">groupBy</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search">search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput">computeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput">groupByInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput">indexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput">searchInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes">indexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute"></a>

```typescript
public readonly compute: MonitorVariablesEventQueryComputeList;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: MonitorVariablesEventQueryGroupByList;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search"></a>

```typescript
public readonly search: MonitorVariablesEventQuerySearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput"></a>

```typescript
public readonly computeInput: IResolvable | MonitorVariablesEventQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>[]

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput"></a>

```typescript
public readonly groupByInput: IResolvable | MonitorVariablesEventQueryGroupBy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>[]

---

##### `indexesInput`<sup>Optional</sup> <a name="indexesInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput"></a>

```typescript
public readonly indexesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: MonitorVariablesEventQuerySearch;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes"></a>

```typescript
public readonly indexes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorVariablesEventQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>

---


### MonitorVariablesEventQuerySearchOutputReference <a name="MonitorVariablesEventQuerySearchOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesEventQuerySearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorVariablesEventQuerySearch;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---


### MonitorVariablesOutputReference <a name="MonitorVariablesOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer"></a>

```typescript
import { monitor } from '@cdktf/provider-datadog'

new monitor.MonitorVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery">putCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery">putEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery">resetCloudCostQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery">resetEventQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudCostQuery` <a name="putCloudCostQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery"></a>

```typescript
public putCloudCostQuery(value: IResolvable | MonitorVariablesCloudCostQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putCloudCostQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]

---

##### `putEventQuery` <a name="putEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery"></a>

```typescript
public putEventQuery(value: IResolvable | MonitorVariablesEventQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]

---

##### `resetCloudCostQuery` <a name="resetCloudCostQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetCloudCostQuery"></a>

```typescript
public resetCloudCostQuery(): void
```

##### `resetEventQuery` <a name="resetEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery"></a>

```typescript
public resetEventQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery">cloudCostQuery</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery">eventQuery</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput">cloudCostQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput">eventQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudCostQuery`<sup>Required</sup> <a name="cloudCostQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQuery"></a>

```typescript
public readonly cloudCostQuery: MonitorVariablesCloudCostQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQueryList">MonitorVariablesCloudCostQueryList</a>

---

##### `eventQuery`<sup>Required</sup> <a name="eventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery"></a>

```typescript
public readonly eventQuery: MonitorVariablesEventQueryList;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a>

---

##### `cloudCostQueryInput`<sup>Optional</sup> <a name="cloudCostQueryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.cloudCostQueryInput"></a>

```typescript
public readonly cloudCostQueryInput: IResolvable | MonitorVariablesCloudCostQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesCloudCostQuery">MonitorVariablesCloudCostQuery</a>[]

---

##### `eventQueryInput`<sup>Optional</sup> <a name="eventQueryInput" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput"></a>

```typescript
public readonly eventQueryInput: IResolvable | MonitorVariablesEventQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorVariables;
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---



